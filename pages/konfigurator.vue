<script setup lang="ts">
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import axios from 'axios';
import { reactive } from 'vue';
import { uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { FirebaseStorage, ref as firebaseRef, StorageReference } from 'firebase/storage';
import { Voice } from '../types/voice';
import { FileState } from '../types/fileState';
import fetchedProduct from '../objects/fetchedProduct';
import pages from '../objects/pages';
import voiceAmount from '../objects/voiceAmount';
import discounts from '../objects/discounts';
import propertyMappings from '../objects/propertyMappings'


interface PdfData {
  name: string;
  // Include other properties as needed, such as URL or size
}
const { pushSuccess } = useNotifications();
const { codeErrorsNotification } = useCartNotification();

// const route = useRoute();
// Primitive values using ref
const price = ref(0);

const files: FileState = reactive({
  1: { id: 'notes', name: '', file: undefined, uploaded: false, isloading: false, downloadLink: '' }, // Assuming `file` is a File object
  2: { id: 'envolve', name: '', file: undefined, uploaded: false, isloading: false, downloadLink: '' },
  3: { id: 'Voice', name: '', file: undefined, uploaded: false, isloading: false, downloadLink: '' },
});

const voiceFile: FileState = reactive({
  // Assuming `file` is a File object
});
const priceString = ref('0');
const projectPriceString = ref('0');
const productionTime = ref("1–3 Tage");
const enveloped = ref(false);
const discount = ref(1);
const currentDiscountId = ref(2);
const pagesQuantitiy = ref(4);
const handlingPrice = ref(3.8);
const singlePrice = ref(4.29);
const pagePrice = ref(0.15);
const productQuantity = ref(1);
const handlingVoice = ref(1);
const pdf1 = ref('');
const storage = useNuxtApp().$firebaseStorage as FirebaseStorage;// Access Firebase Storage instance
const voicePagePrice = ref(0.15);
const projectType = ref(1);
const productName = ref("");
const format = ref(true);
const paperFormat = ref(1);
const color = ref(false);
const envelopedPrice = ref(0);
const bindingType = ref("true");
const errorMassage = ref("");
const totalVoicePrice = ref(0);
const bindingTypePrice = ref(0);
const weight = ref(0);
const swEndPoint = ref("");
const accesstoken = ref("");
const isLoading = ref(false);
const voices = ref<Voice[]>([]); // Array of 'Voice'
const newVoice = ref({
  name: '',
  url: '',
  pages: 4, // Default value, adjust as needed
  quantity: 1, // Default value, adjust as needed
  uploadName: '',
  downloadUrl: '',
});
const formValidations = reactive({
  newVoiceNameValid: true,
  fileSelectedValid: true,
}); const validationMessages = reactive({
  newVoiceName: '',
  fileSelected: '', // Message for file input validation
  // Other messages...
});
const baseVoicePrice = ref(16.4);

onMounted(() => {
  calculatePrice();
  updateCurrentDiscountId(discount.value); // Make sure calculatePrice is defined appropriately
});

const swEnvironment = useRuntimeConfig(); // Nuxt 3 way to access runtime config
if (typeof swEnvironment.public.shopware.shopwareEndpoint === 'string' && typeof swEnvironment.public.shopware.shopwareAccessToken === 'string') {
  swEndPoint.value = swEnvironment.public.shopware.shopwareEndpoint;
  accesstoken.value = swEnvironment.public.shopware.shopwareAccessToken;
} else {
  console.error('shopware_endpoint is not a string');
}

const authenticate = async () => {
  const authData = {
    grant_type: 'client_credentials',
    client_id: 'SWIAEJZYQ09VBFPSNZZ0T0VLUG',
    client_secret: 'cTAxWmRsZ2kxaHppRjN1WldrUTBIYWoyS1czUHV0TlJzdWVMZWM'
  };

  try {
    const response = await axios.post(`${swEndPoint.value}/api/oauth/token`, authData);
    return response.data.access_token;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Authentication error:", error.message);
    } else {
      console.error("An unknown error occurred.");
    }
  }
};

const createProduct = async (accessToken: string, productData: any) => {
  try {
    const response = await axios.post(`${swEndPoint.value}/api/product`, productData, {
      headers: {
        "Accept": 'application/json',
        "Authorization": accessToken,
        "Content-Type": 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof Error) {

      console.error("Product creation error:", error.message);
    } else {
      console.error("An unknown error occurred during product creation.");
    }
  }
};
const preCheck = () => {
  createAndFetch();
  // if (validate()) {
  //   createAndFetch();
  // }
};
const validate = () => {
  if (projectType.value === 1) {
    if (pdf1.value === "" || productName.value === "") {
      errorMassage.value = "Bitte laden Sie eine Notendatei hoch und vergeben Sie einen Projektnamen, bevor Sie das Produkt in Ihren Warenkorb legen.";
      return false;
    } else {
      return true;
    }
  } else if (projectType.value === 2) {
    if (pdf1.value === "" || productName.value === "" || voices.value.length === 0) {
      errorMassage.value = "Bitte laden Sie eine Notendatei hoch, vergeben sie einen Projektnamen und fügen Sie eine Stimme hinzu bevor Sie das Produkt in Ihren Warenkorb legen";
      return false;
    } else {
      return true;
    }
  } else if (projectType.value === 3 || productName.value === "") {
    if (voices.value.length === 0) {
      errorMassage.value = "Bitte vergeben Sie eine Stimmenbezeichnung und laden Sie eine Notendatei hoch, bevor Sie die Stimme dem Projekt hinzufügen.";
      return false;
    } else {
      return true;
    }
  }
};

const createAndFetch = async () => {
  try {
    isLoading.value = true;
    const accessToken = await authenticate();
    console.log("Prechecks done. Creating product...");
    const productData = getProductData();

    await createProduct(accessToken, productData);
    console.log("Product created. Fetching product...");
    const response = await fetchProduct(productData.productNumber);
    fetchedProduct.value = response.elements[0];
    console.log("Product Fetched. Adding Product to Cart...");
    await addToCartProxy();
    codeErrorsNotification();
    pushSuccess(`${fetchedProduct.value.translated?.name} has been added to cart.`);
    //pushSuccess("Product successfully added to cart."); // Assuming pushSuccess is defined
  } catch (error) {
    if (error instanceof Error) {
      console.error("createAndFetch process error:", error.message);
      //pushError("Error adding product to cart."); // Error feedback
    } else {
      console.error("An unknown error occurred in createAndFetch process.");
    }
    isLoading.value = false;
  } finally {
    isLoading.value = false;
    reset(true);
  }
};
const { addToCart, quantity } = useAddToCart(fetchedProduct);

const addToCartProxy = async () => {
  await addToCart();
};
const getDesc = () => {
  let desc = `<span>Projekt Name: ${productName.value}</span><br/>` +
    `<span>Link: <a href="${files[1].downloadLink}">Downloadlink Notenheft</a></span><br/>`;

  if (files[2].downloadLink) {
    desc += `<span>Link:<a href="${files[2].downloadLink}">Downloadlink Umschlag</a></span><br/>`;
  }

  desc += `<span>Seitenzahl: ${pagesQuantitiy.value}</span><br/><p>\n</p>`;

  if (voices.value.length > 0) {
    desc += '<p><big>Stimmen</big></p>';
    voices.value.forEach(voice => {
      desc += `<span>Stimmenbezeichnung: ${voice.name}</span><br/>` +
        `<span>Link: <a href="${voice.downloadUrl}">Downloadlink</a></span><br/>` +
        `<span>Seitenanzahl Inhalt: ${voice.pages}</span><br/>` +
        `<span>Exemplare pro Set: ${voice.quantity}</span><br/><p>\n</p>`;
    });
  }

  return desc;
};

const getProductData = () => {
  const propertieIds = getProperties();
  const productNumber = createUID();
  const desc = getDesc();
  return {
    "name": productName.value,
    "productNumber": productNumber,
    "properties": propertieIds,
    "stock": 10,
    "taxId": "49ad39168485457a836441d13c6bd473",
    "active": true,
    "keywords": "2212",
    "description": desc,
    "weight": weight.value,
    "media": [{
      "id": "6bd19a84161f44e3b7efb37e835c5ec2",

      "mediaId": "b1c75efd9ff24aee9fc6338c6b175cdc",
      "position": 0,
      "url": "https://s23511.creoline.cloud/media/9b/e6/96/1687422934/capellaProduct.jpeg",
    }],
    "coverId": "6bd19a84161f44e3b7efb37e835c5ec2",
    "price": [
      {
        "currencyId": "b7d2554b0ce847cd82f3ac9bd1c0dfca",
        "gross": price.value,
        "net": price.value,
        "linked": false
      }
    ],
    "customFields": {
      "custom_paperformat_": "123",
      "custom_paperFormat": "123"
    },
    'visibilities': [
      {
        'salesChannelId': 'fac913bddf1244098e07a811fd301f75',
        'visibility': 30
      }
    ]
  }
};
const createUID = () => {
  return `uid-${Date.now().toString(36)}${Math.random().toString(36).substr(2)}`;
};

const fetchProduct = async (productNumber: string) => {
  try {
    const response = await axios({
      url: `${swEndPoint.value}/store-api/search`,
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json',
        "sw-access-key": 'SWSCUHZMWDM2TTLINJFXMKG3TW'
      },
      data: {
        "search": productNumber
      }
    });

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetching product error:", error.message);
    } else {
      console.error("An unknown error occurred during product fetching.");
    }
  }
};

const getProperties = () => {
  let ids = [];
  const formatKey = format.value ? 'true' : 'false';
  const colorKey = color.value ? 'true' : 'false';
  const bindingTypesKey = bindingType.value ? 'true' : 'false';
  const envelopesKey = enveloped.value ? 'true' : 'false';


  if (projectType.value >= 1 && projectType.value <= 3) {
    ids.push({ id: propertyMappings.projectTypes[projectType.value].id });
  }

  // Format
  ids.push({ id: propertyMappings.formats[formatKey].id });

  // Color
  ids.push({ id: propertyMappings.colors[colorKey].id });

  // bindingTypes
  ids.push({ id: propertyMappings.bindingTypes[bindingTypesKey].id });

  // bindingTypes
  ids.push({ id: propertyMappings.envelopes[envelopesKey].id });

  // Paper Format
  if (propertyMappings.paperFormatMappings[paperFormat.value]) {
    ids.push({ id: propertyMappings.paperFormatMappings[paperFormat.value].id });
  }

  return ids;
};

const calculatePrice = () => {
  calculateDiscount();
  setPagePrice();
  setBinding();
  setBindingPrice();
  calculateVoicePrices();
  calculateWeight();
  calculateProjectPrice();

  let pagesToUse = pagesQuantitiy.value;
  if (pagesQuantitiy.value <= 84) {
    pagesToUse = 84;
  }
  if (projectType.value === 3) {
    price.value = totalVoicePrice.value + baseVoicePrice.value;
    singlePrice.value = totalVoicePrice.value + baseVoicePrice.value;
  } else {
    price.value = (pagePrice.value * pagesToUse) + handlingPrice.value + bindingTypePrice.value + totalVoicePrice.value + envelopedPrice.value;
    if (discount.value !== 1) {
      price.value *= (1 - discount.value);
    }
    singlePrice.value = handlingPrice.value + (pagePrice.value * pagesToUse) + bindingTypePrice.value + totalVoicePrice.value + envelopedPrice.value;
  }
};

const calculateDiscount = () => {
  if (productQuantity.value === 1) {
    discount.value = 1;
    productionTime.value = "1–3 Tage";
    //setDiscountGroup(1);
  } else if (productQuantity.value > 1 && productQuantity.value < 10) {
    discount.value = 0.45;
    productionTime.value = "1–3 Tage";
    //setDiscountGroup(2);
  } else if (productQuantity.value > 9 && productQuantity.value < 24) {
    discount.value = 0.55;
    productionTime.value = "1–3 Tage";
    //setDiscountGroup(3);
  } else if (productQuantity.value > 24 && productQuantity.value < 50) {
    discount.value = 0.63;
    productionTime.value = "1–3 Tage";
    //setDiscountGroup(4);
  } else if (productQuantity.value > 49 && productQuantity.value < 75) {
    discount.value = 0.68;
    productionTime.value = "1–3 Tage";
    //setDiscountGroup(5);
  } else if (productQuantity.value > 74 && productQuantity.value < 100) {
    discount.value = 0.70;
    productionTime.value = "1–3 Tage";
    //setDiscountGroup(6);
  } else if (productQuantity.value > 99 && productQuantity.value < 150) {
    discount.value = 0.72;
    productionTime.value = "3–5 Tage";
    //setDiscountGroup(7);
  } else if (productQuantity.value > 149 && productQuantity.value < 200) {
    discount.value = 0.74;
    productionTime.value = "3–5 Tage";
    //setDiscountGroup(8);
  } else if (productQuantity.value > 199 && productQuantity.value < 250) {
    discount.value = 0.75;
    productionTime.value = "3–5 Tage";
    //setDiscountGroup(9);
  } else if (productQuantity.value >= 250) {
    discount.value = 0.76;
    productionTime.value = "3–5 Tage";
    //setDiscountGroup(10);
  }
};

const setPagePrice = () => {
  if (!color.value) {
    pagePrice.value = paperFormat.value < 4 ? 0.15 : 0.25;
  } else {
    pagePrice.value = paperFormat.value < 4 ? 0.20 : 0.30;
  }
};

const setBinding = () => {
  bindingType.value = (pagesQuantitiy.value >= 88 || !format.value || paperFormat.value > 3) ? 'false' : 'true';
};

const setBindingPrice = () => {
  if (bindingType.value === 'true') {
    bindingTypePrice.value = 0;
  } else {
    bindingTypePrice.value = paperFormat.value < 4 ? 3.5 : 4.5;
  }
};

const calculateVoicePrices = () => {
  totalVoicePrice.value = 0;
  voices.value.forEach(voice => {
    totalVoicePrice.value += (handlingVoice.value + (voice.pages * voicePagePrice.value) * voice.quantity);
  });
};

const calculateWeight = () => {
  let weightPerPage = 3;
  let envelopedWeight = 0;
  let formatWeight = 0;
  let voiceWeight = 0;

  if (paperFormat.value === 6 || paperFormat.value === 5) {
    weightPerPage = 6;
  }
  if (enveloped.value && (paperFormat.value === 6 || paperFormat.value === 5)) {
    envelopedWeight = 80;
  } else if (enveloped.value) {
    envelopedWeight = 40;
  }
  if (bindingType.value !== 'true') {
    formatWeight = 50;
  }
  if (voices.value) {
    voices.value.forEach(voice => {
      voiceWeight += voice.pages * 3;
    });
  }
  weight.value = (weightPerPage * pagesQuantitiy.value + envelopedWeight + formatWeight + voiceWeight) / 1000;
};

const calculateProjectPrice = () => {
  priceString.value = price.value.toFixed(2).replace(".", ",");
  if (productQuantity.value === 0) {
    projectPriceString.value = priceString.value;
  } else {
    projectPriceString.value = (price.value * productQuantity.value).toFixed(2).replace(".", ",");
  }
};

const reset = (full: boolean) => {
  if (full) {
    productQuantity.value = 1;
    projectType.value = 1;
    productName.value = "";
    files[1] = { id: 'notes', name: '', file: undefined, uploaded: false, isloading: false, downloadLink: '' };
    files[2] = { id: 'notes', name: '', file: undefined, uploaded: false, isloading: false, downloadLink: '' };
    files[3] = { id: 'Voice', name: '', file: undefined, uploaded: false, isloading: false, downloadLink: '' };
  }
  productionTime.value = "1–3 Tage";
  enveloped.value = false;
  discount.value = 1;
  format.value = true;
  paperFormat.value = 1;
  color.value = false;
  bindingType.value = "true";
  voices.value = [];
  bindingTypePrice.value = 0;
  totalVoicePrice.value = 0;


  calculatePrice();
};

function getFileHeadline(fileIndex: number) {
  const fileId = files[fileIndex].id;
  if (fileId === 'notes') {
    return 'Noten-PDF / Inhalt:*';
  } else if (fileId === 'envolve') {
    return 'ggf. Umschlagdatei:';
  }
  return ''; // Default return value if no id matches
}

function validateFileSelection(fileIndex: number) {
  const file = files[fileIndex]?.file; // Adjust based on your data structure

  if (!file) {
    formValidations.fileSelectedValid = false;
    validationMessages.fileSelected = 'Bitte wählen Sie eine Datei aus.';
  } else {
    formValidations.fileSelectedValid = true;
    validationMessages.fileSelected = '';
  }
}

const handleFileSelection = (event: any, fileIndex: any) => {
  const file = event.target.files[0]; // Get the file
  if (file) {
    files[fileIndex] = { id: files[fileIndex].id, name: file.name, file, uploaded: false, isloading: false, downloadLink: '' };
    uploadFile(fileIndex);
  }
};

// Upload file to Firebase Storage
const uploadFile = async (fileIndex: any) => {
  const fileData = files[fileIndex];
  const storagePath: string = `uploads/${fileData.name}`;
  const storageRef: StorageReference = firebaseRef(storage, storagePath);
  files[fileIndex].isloading = true
  if (!fileData.file) return;


  try {
    const uploadTask = uploadBytesResumable(storageRef, fileData.file);

    uploadTask.on('state_changed',
      (snapshot) => {
        // Optional: Update progress
        files[fileIndex].progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.error('Upload failed: ', error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        files[fileIndex].isloading = false
        files[fileIndex].uploaded = true
        files[fileIndex].downloadLink = downloadURL
        // Optional: Update your app's state with the download URL
      }
    );
  } catch (error) {
    console.error('Error uploading file: ', error);
  }
};
const deleteFile = async (fileIndex: number) => {
  const fileData = files[fileIndex];
  const storagePath = `uploads/${fileData.name}`;
  const storageRef = firebaseRef(storage, storagePath);
  files[fileIndex].downloadLink = '';

  try {
    await deleteObject(storageRef);
    console.log(`${fileIndex}: File successfully deleted`);

    // Update your app's state here
    files[fileIndex].isloading = false;
    files[fileIndex].uploaded = false;
    files[fileIndex].file = undefined;

  } catch (error) {
    console.error('Error deleting file: ', error);
  }
};

const removeVoice = (index: number) => {
  // Removes the item at the specified index
  voices.value.splice(index, 1);
};

const cancelSelection = (fileIndex: number) => {
  // Reset the selected state and file name for the input
  files[fileIndex] = { id: files[fileIndex].id, name: '', uploaded: false, isloading: false, downloadLink: '' };
};

// Define the count function to increment or decrement the quantity
const count = (increase: boolean) => {
  if (increase) {
    if (productQuantity.value < 300) {
      console.log(productQuantity.value) // Ensures productQuantity does not exceed max
      productQuantity.value = productQuantity.value + 1;
    }
  } else {
    if (productQuantity.value > 1) { // Ensures productQuantity does not go below min
      productQuantity.value = productQuantity.value - 1;
    }
  }
  updateCurrentDiscountId(productQuantity.value);
};

function updateCurrentDiscountId(productQuantity: number) {

  // Sort discounts by amount to ensure they are in the correct order
  const sortedDiscounts = discounts.slice().sort((a, b) => a.amount - b.amount);

  // Find the discount that applies to the given product quantity
  for (const discount of sortedDiscounts) {
    if (productQuantity >= discount.amount) {
      currentDiscountId.value = discount.id;
    } else {
      // Since discounts are sorted, we can break early if the quantity is less than the current discount amount
      break;
    }
  }
}

function setAmount(amount: number) {
  // Set the product quantity to the lowest amount of the selected discount group
  productQuantity.value = amount;

  // Then, call updateCurrentDiscountId with the new quantity
  updateCurrentDiscountId(productQuantity.value);
}

function addVoice(index: number) {
  validateNewVoiceName();
  // Validate all files as needed. For example, if you have a single file:
  validateFileSelection(index);
  if (!formValidations.newVoiceNameValid || !formValidations.fileSelectedValid /* include other validations as needed */) {
    return;
  }
  newVoice.value.downloadUrl = files[index].downloadLink
  newVoice.value.uploadName = files[index].name
  voices.value.push({ ...newVoice.value });
  // Reset form
  newVoice.value = { name: '', url: '', pages: 4, quantity: 1, uploadName: '', downloadUrl: '' };
  newVoice.value.uploadName = files[index].name
  files[index] = { id: 'Voice', name: '', file: undefined, uploaded: false, isloading: false, downloadLink: '' };
  calculatePrice();
}

function validateNewVoiceName() {
  if (!newVoice.value.name || newVoice.value.name.trim() === '') {
    formValidations.newVoiceNameValid = false;
    validationMessages.newVoiceName = 'Bitte geben Sie einen Namen für die Stimme ein.';
  } else {
    formValidations.newVoiceNameValid = true;
    validationMessages.newVoiceName = '';
  }
}

// Watchers
watch(projectType, () => {
  reset(false);
});

watch(color, () => {
  calculatePrice();
});

watch(paperFormat, () => {
  calculatePrice();
});

watch(price, () => {
  calculateProjectPrice();
});

watch(enveloped, (val) => {
  if (val) {
    envelopedPrice.value = 1.5;
  } else if (!val) {
    envelopedPrice.value = 0;
  }
  calculatePrice();
});

watch(pagesQuantitiy, () => {
  calculatePrice();
});

watch(productQuantity, (newValue) => {
  if (newValue < 1) {
    productQuantity.value = 1;
  }
  updateCurrentDiscountId(productQuantity.value);
  calculatePrice();
});

watch(format, () => {
  calculatePrice();
});

watch(bindingType, () => {
  calculatePrice();
});

useBreadcrumbs([
  {
    name: "Konfigurator",
    path: "/konfigurator",
  },
]);

</script>


<script lang="ts">
export default {
  name: "konfigurator",
};

</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <section>
      <div class="flex flex-col sm:flex-row">
        <div class="blue md:w-3/9 w-full border-12 border-white flex flex-col">
          <div class="flex flex-col flex-g p-5">
            <img src="@/assets/svg/verified.svg" alt="Avatar" class="max-w-11">
            <!-- Make this a flex container and let it g -->
            <h2 class="mt-3">Ihre Vorteile bei capellaprint</h2>
            <!-- Image and Text 1 -->
            <div class="flex items-center mt-4">
              <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
              <p>Erstklassiger Notendruck</p>
            </div>

            <!-- Image and Text 2 -->
            <div class="flex items-center mt-4">
              <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
              <p>Musikalientypische Papierformate</p>
            </div>

            <!-- Image and Text 3 -->
            <div class="flex items-center mt-4">
              <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
              <p>Prestissimo versandfertig</p>
            </div>

            <!-- Image and Text 4 -->
            <div class="flex items-center mt-4 mb-5">
              <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
              <p>Kauf auf Rechnung möglich</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row border-12 border-white">
          <img class="w-full h-full object-cover smmax-h-xs" src="@/assets/images/pic9.png" alt="Card image cap">
        </div>
        <div class="flex flex-col sm:flex-row border-12 border-white">
          <img class="w-full h-full object-cover smmax-h-xs" src="@/assets/images/pic10.png" alt="Card image cap">
        </div>
      </div>
    </section>
    <section>
      <div class="border-12 border-white">
        <h1>
          Konfigurieren Sie Ihr Notenheft
        </h1>
      </div>
    </section>
    <section>
      <form @submit.prevent="preCheck" class="mt-3">
        <div class="flex flex-col md:flex-row">
          <div class="grey md:w-6/9 w-full border-12 border-white flex flex-col p-4">
            <div class="flex flex-wrap pt-3">
              <!-- Column 1 (3/5) -->
              <div class="w-full sm:w-3/5 p-2">
                <h2>
                  1. Projekttitel*
                </h2>
                <p>Bitte vergeben Sie hier einen eindeutigen Projekttitel.</p>
              </div>
              <!-- Column 2 (2/5) -->
              <div class="w-2/5 p-2 mt-5">
                <input required placeholder="Projekttitel eingeben ..." class=" p-3" type="string"
                  v-model="productName">
              </div>
            </div>
            <div class="flex flex-wrap pt-3">
              <!-- Column 1 (3/5 on sm and above) -->
              <div class="w-full sm:w-3/5 p-2">
                <h2>2. Art des Projekts*</h2>
                <p>Zu Beginn ist es notwendig, zu wissen, um welche Art von Notenprojekt es sich handelt.</p>
                <p class="mt-3">Wählen Sie zwischen den gebräuchlichsten Formen:</p>
                <ul class="list-disc list-outside pl-5 space-y-2">
                  <li class="text-gray-700">Partitur/Notenheft ohne separate Stimmauszüge / Instrumentalstimmen</li>
                  <li class="text-gray-700">Partitur mit separaten Stimmauszügen / Instrumentalstimmen</li>
                  <li class="text-gray-700">Stimmauszüge / Instrumentalstimmen ohne Partitur</li>
                </ul>
              </div>
              <!-- Column 2 (2/5 on sm and above) -->
              <div class="w-full sm:w-2/5 p-2"><!-- Removed mt-5 and added sm:mt-0 for responsiveness -->
                <!-- Rows with radio options -->
                <div class="flex mb-3"> <!-- Use mb-3 for spacing between rows consistently -->
                  <div class="w-3/5">
                    <p class="font-bold">Notenheft ohne Instrumentalstimmen</p>
                  </div>
                  <div class="w-2/5">
                    <input type="radio" id="option1" value="1" v-model="projectType" />
                  </div>
                </div>
                <!-- Repeat for other rows -->
                <div class="flex mb-3">
                  <div class="w-3/5">
                    <p class="font-bold">Notenheft mit Instrumentalstimmen</p>
                  </div>
                  <div class="w-2/5">
                    <input type="radio" id="option2" value="2" v-model="projectType" />
                  </div>
                </div>
                <div class="flex mb-3">
                  <div class="w-3/5">
                    <p class="font-bold">Stimmensatz / Chorsatz</p>
                  </div>
                  <div class="w-2/5">
                    <input type="radio" id="option3" value="3" v-model="projectType" />
                  </div>
                </div>
              </div>
            </div>

            <div v-if="projectType != 3" class="flex flex-wrap pt-3">
              <!-- Column 1 (3/5) -->
              <div class="w-full sm:w-3/5 p-2">
                <h2>3. Papierformat*</h2>
                <p>Bitte wählen Sie das Format aus, das die Noten haben. Sie können zwischen gebräuchlichen
                  musikalientypischen Papierformaten wählen.</p>
                <p class=" mt-3">Bitte beachten Sie: Wenn Sie unterschiedliche Formate innerhalb eines Projekts haben
                  (bspw.
                  Partitur in DIN A3 und Stimmen in DIN A4), legen Sie bitte für jedes Format ein neues Projekt an.</p>
                <p class="mt-3">Beispiel:</p>
                <ul class="list-disc list-outside pl-5 space-y-2">
                  <li class="text-gray-700">»Klavierauszug Chorheft Cäcilia«, Concertformat</li>
                  <li class="text-gray-700">»Chorsatz Chorheft Cäcilia«, DIN A4</li>
                </ul>
              </div>
              <!-- Column 2 (2/5) -->
              <div class="w-full sm:w-2/5 p-2">
                <!-- First row -->
                <div class="flex pt-8"> <!-- Added margin-bottom for spacing between rows -->
                  <div class="flex-1" style="flex-basis: 70%;"> <!-- Adjusted to 60% to reflect 3/5 -->
                    <p class="font-bold">DIN A4 (21 x 29,7 cm)</p>
                  </div>
                  <div class="flex-1" style="flex-basis: 30%;">
                    <!-- Adjusted to 40% to reflect 2/5 and added margin-top for alignment -->
                    <input type="radio" id="option1" value="1" v-model="paperFormat" />
                  </div>
                </div>
                <!-- Second row, identical to the first row -->
                <div class="flex mt-3">
                  <div class="flex-1" style="flex-basis: 70%;"> <!-- Adjusted to 60% to reflect 3/5 -->
                    <p class="font-bold">Klavierauszug (19 x 27 cm)</p> <!-- Adjust content as needed -->
                  </div>
                  <div class="flex-1" style="flex-basis: 30%">
                    <!-- Adjusted to 40% to reflect 2/5 and added margin-top for alignment -->
                    <input type="radio" id="option2" value="2" v-model="paperFormat" />
                  </div>
                </div>
                <div class="flex mt-3">
                  <div class="flex-1" style="flex-basis: 70% "> <!-- Adjusted to 60% to reflect 3/5 -->
                    <p class="font-bold">Concert (22,8 x 30,5 cm)</p> <!-- Adjust content as needed -->
                  </div>
                  <div class="flex-1" style="flex-basis: 30% ">
                    <!-- Adjusted to 40% to reflect 2/5 and added margin-top for alignment -->
                    <input type="radio" id="option3" value="3" v-model="paperFormat" />
                  </div>
                </div>
                <div class="flex mt-3">
                  <div class="flex-1" style="flex-basis: 70% "> <!-- Adjusted to 60% to reflect 3/5 -->
                    <p class="font-bold">DIN B4 (25 x 35,3 cm)</p> <!-- Adjust content as needed -->
                  </div>
                  <div class="flex-1" style="flex-basis: 30% ">
                    <!-- Adjusted to 40% to reflect 2/5 and added margin-top for alignment -->
                    <input type="radio" id="option4" value="4" v-model="paperFormat" />
                  </div>
                </div>
                <div class="flex mt-3">
                  <div class="flex-1" style="flex-basis: 70% "> <!-- Adjusted to 60% to reflect 3/5 -->
                    <p class="font-bold">DIN A3 (29,7 x 42 cm)</p> <!-- Adjust content as needed -->
                  </div>
                  <div class="flex-1" style="flex-basis: 30% ">
                    <!-- Adjusted to 40% to reflect 2/5 and added margin-top for alignment -->
                    <input type="radio" id="option5" value="5" v-model="paperFormat" />
                  </div>
                </div>
                <div class="flex mt-3">
                  <div class="flex-1" style="flex-basis: 70% "> <!-- Adjusted to 60% to reflect 3/5 -->
                    <p class="font-bold">Dirigent (31,5 x 46 cm)</p> <!-- Adjust content as needed -->
                  </div>
                  <div class="flex-1" style="flex-basis: 30% ">
                    <!-- Adjusted to 40% to reflect 2/5 and added margin-top for alignment -->
                    <input type="radio" id="option6" value="6" v-model="paperFormat" />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="projectType != 3" class="flex flex-wrap pt-3">
              <!-- Column 1 (3/5) -->
              <div class="w-full sm:w-3/5 p-2">
                <h2>4. Ausrichtung*</h2>
                <p>Bitte geben Sie nun an, ob die Noten im Hoch– oder im Querformat angelegt sind.</p>
                <p class=" mt-3">Bitte beachten Sie, dass Sie innerhalb eines Projekts die Ausrichtungen nicht mischen
                  können.
                </p>
              </div>
              <!-- Column 2 (2/5) -->
              <div class="w-full sm:w-2/5 p-2">
                <!-- First row -->
                <div class="flex "> <!-- Added margin-bottom for spacing between rows -->
                  <div class="flex-1" style="flex-basis: 70%;"> <!-- Adjusted to 60% to reflect 3/5 -->
                    <p class="font-bold">Notenheft Hochformat</p>
                  </div>
                  <div class="flex-1" style="flex-basis: 30% ">
                    <!-- Adjusted to 40% to reflect 2/5 and added margin-top for alignment -->
                    <input type="radio" id="option1" value="true" v-model="format" />
                  </div>
                </div>
                <!-- Second row, identical to the first row -->
                <div class="flex mt-3">
                  <div class="flex-1" style="flex-basis: 70%;"> <!-- Adjusted to 60% to reflect 3/5 -->
                    <p class="font-bold">Notenheft Querformat</p> <!-- Adjust content as needed -->
                  </div>
                  <div class="flex-1" style="flex-basis: 30% ">
                    <!-- Adjusted to 40% to reflect 2/5 and added margin-top for alignment -->
                    <input type="radio" id="option2" value="false" v-model="format" />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="projectType != 3" class="flex flex-wrap pt-3">
              <!-- Column 1 (3/5) -->
              <div class="w-full sm:w-3/5 p-2">
                <h2>5. Farbigkeit Inhalt*</h2>
                <p>Ihre Noten können im Innenteil entweder schwarzweiß oder farbig gedruckt werden.</p>
                <p class=" mt-3">Falls Ihr Notenprojekt einen Umschlag hat, wird dieser ohne Aufpreis farbig gedruckt.
                  Instrumentalstimmen werden generell schwarzweiß gedruckt.</p>
              </div>
              <!-- Column 2 (2/5) -->
              <div class="w-2/5 p-2 flex flex-col mt-8">
                <!-- Second row, identical to the first row -->
                <div class="flex">
                  <div class="flex-1" style="flex-basis: 70%;"> <!-- Adjusted to 60% to reflect 3/5 -->
                    <p class="font-bold">Inhalt schwarzweiß</p> <!-- Adjust content as needed -->
                  </div>
                  <div class="flex-1" style="flex-basis: 30% ">
                    <!-- Adjusted to 40% to reflect 2/5 and added margin-top for alignment -->
                    <input type="radio" id="option1" value="true" v-model="color" />
                  </div>
                </div>
                <div class="flex mt-3">
                  <div class="flex-1" style="flex-basis: 70%;"> <!-- Adjusted to 60% to reflect 3/5 -->
                    <p class="font-bold">Inhalt farbig</p> <!-- Adjust content as needed -->
                  </div>
                  <div class="flex-1" style="flex-basis: 30% ">
                    <!-- Adjusted to 40% to reflect 2/5 and added margin-top for alignment -->
                    <input type="radio" id="option2" value="false" v-model="color" />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="projectType != 3" class="flex flex-wrap pt-3">
              <!-- Column 1 (3/5) -->
              <div class="w-full sm:w-3/5 p-2">
                <h2>6. Seitenanzahl*</h2>
                <p>Bitte geben Sie die Gesamtseitenanzahl Ihrer Datei an. Aus produktionstechnischen Gründen muss diese
                  immer
                  durch 4 teilbar sein.</p>
                <p class=" mt-3">Sie können zwischen 4 und 400 Seiten Umfang wählen. Bitte beachten Sie, dass wir Ihr
                  Heft
                  in
                  den Formaten DIN A4, Klavierauszug und Concert bei weniger als 88 Seiten Inhalt standardmäßig
                  klammerheften.
                </p>
              </div>
              <!-- Column 2 (2/5) -->
              <div class="w-full sm:w-2/5 p-2">
                <!-- First row -->
                <div class="flex"> <!-- Added margin-bottom for spacing between rows -->
                  <div class="flex-1" style="flex-basis: 70%;"> <!-- Adjusted to 60% to reflect 3/5 -->
                    <p class="font-bold">Seitenanzahl Inhalt:</p>
                  </div>
                  <div class="flex-1" style="flex-basis: 30% ">
                    <!-- Adjusted to 40% to reflect 2/5 and added margin-top for alignment -->
                    <select id="mySelect" class="custom-select selectBtn" v-model="pagesQuantitiy">
                      <option selected v-bind:value="4"> 4
                      </option>
                      <option v-for="item in pages" v-bind:value="item">{{ item }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- Second row, identical to the first row -->
              </div>
            </div>
            <div v-if="projectType != 3" class="flex flex-wrap pt-3">
              <!-- Column 1 (3/5) -->
              <div class="w-full sm:w-3/5 p-2">
                <h2>7. Bindung*</h2>
                <p>Bitte beachten Sie, dass bei den Formaten DIN B4, DIN A3 und Dirigent sowie bei allen Querformaten
                  und
                  bei
                  mehr als 88 Seiten Inhalt nur Spiralbindung verfügbar ist.</p>
                <p class=" mt-3">Wählen Sie zwischen den gebräuchlichsten Formen:</p>
              </div>
              <!-- Column 2 (2/5) -->
              <div class="w-full sm:w-2/5 p-2">
                <!-- First row -->
                <div class="flex "> <!-- Added margin-bottom for spacing between rows -->
                  <div class="flex-1" style="flex-basis: 70%;"> <!-- Adjusted to 60% to reflect 3/5 -->
                    <div>
                      <p v-if="bindingType == 'true'">Bindung: Klammerheftung</p>
                      <p v-if="bindingType == 'false'">Bindung: Spiralbindung</p>
                    </div>
                  </div>
                </div>

                <!-- Second row, identical to the first row -->
              </div>
            </div>
            <div v-if="projectType != 3" class="flex flex-wrap pt-3">
              <!-- Column 1 (3/5) -->
              <div class="w-full sm:w-3/5 p-2">
                <h2>8. Umschlag</h2>
                <p>Unser hochweißer Umschlagkarton mit 260g/m² gibt Farben brillant wieder und besitzt ein
                  hervorragendes
                  Aufschlagverhalten. Die einseitig matte Oberfläche lässt sich hervorragend bedrucken und bricht auch
                  bei
                  starker Beanspruchung nicht auf.</p>
              </div>
              <!-- Column 2 (2/5) -->
              <div class="w-full sm:w-2/5 p-2">
                <!-- Second row, identical to the first row -->
                <div class="flex">
                  <div class="flex-1" style="flex-basis: 70%;"> <!-- Adjusted to 60% to reflect 3/5 -->
                    <p class="font-bold">Mit Umschlag:</p> <!-- Adjust content as needed -->
                  </div>
                  <div class="flex-1" style="flex-basis: 30% ">
                    <!-- Adjusted to 40% to reflect 2/5 and added margin-top for alignment -->
                    <input type="radio" id="option1" value="true" v-model="enveloped" />
                  </div>
                </div>
                <div class="flex mt-3">
                  <div class="flex-1" style="flex-basis: 70%;"> <!-- Adjusted to 60% to reflect 3/5 -->
                    <p class="font-bold">Ohne Umschlag:</p> <!-- Adjust content as needed -->
                  </div>
                  <div class="flex-1" style="flex-basis: 30% ">
                    <!-- Adjusted to 40% to reflect 2/5 and added margin-top for alignment -->
                    <input type="radio" id="option2" value="false" v-model="enveloped" />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="projectType != 3" class="flex flex-wrap pt-3">
              <!-- Column 1 (3/5) -->
              <div class="w-full sm:w-3/5 p-2">
                <h2>
                  9. Notenupload*
                </h2>
                <p>Hier laden Sie nun die Druckdaten als PDF auf unseren Server – ganz bequem und einfach. Ihre Daten
                  werden
                  verschlüsselt übertragen. Wir prüfen diese auf Druckbarkeit und melden uns ggf. per E-Mail, falls
                  etwas
                  nicht passen sollte.</p>
              </div>
              <!-- Column 2 (2/5) -->
              <div class="w-full sm:w-2/5 p-2">
                <div v-for="fileIndex in [1, 2]" :key="fileIndex" class="block mb-3">
                  <div class="block mb-3 ml-3">
                    <label class="block font-bold">
                      {{ getFileHeadline(fileIndex) }}
                    </label>
                  </div>
                  <label v-if="!files[fileIndex].uploaded && !files[fileIndex].isloading" class="block">
                    <span class="sr-only">Upload File {{ fileIndex }}</span>
                    <input type="file" @change="handleFileSelection($event, fileIndex)" class="block w-full text-sm text-gray-900
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-black-50 file:text-black-700
                 hover:file:bg-blue-100" :required="fileIndex === 1 || enveloped" />
                  </label>
                  <div v-if="files[fileIndex].isloading" class="flex flex-col justify-between ml-3">
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 border border-black">
                      <div :style="{ width: files[fileIndex].progress + '%' }" class="bg-blue-600 h-2.5 rounded-full">
                      </div>
                    </div>
                  </div>
                  <div v-if="!files[fileIndex].isloading && files[fileIndex].uploaded"
                    class="flex flex-col justify-between ">
                    <div class="flex justify-between items-center">
                      <span class="text-sm text-gray-800 ml-3">{{ files[fileIndex].name }}</span>
                      <button @click.prevent="deleteFile(fileIndex)"
                        class="ml-2 btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="projectType != 1" class="flex flex-wrap pt-3">
              <!-- Column 1 (3/5) -->
              <div class="w-full sm:w-3/5 p-2">
                <h2 v-if="projectType != 2">
                  3. Instrumentalstimmen*
                </h2>
                <h2 v-if="projectType != 3">
                  10. Instrumentalstimmen*
                </h2>
                <p class="pt-3">Wenn Ihr Projekt Instrumentalstimmen enthält, können Sie diese hier konfigurieren.</p>
                <p class="pt-3">Bitte geben Sie an, wie viele Seiten die Stimmeneinleger haben.</p>
                <p class="pt-3">Wählen Sie bitte zusätzlich aus, wie viele Exemplare von jeder Stimme pro Set enthalten
                  sein
                  sollen (bspw. Orchestermusik: 8 Erste Violinen, 6 Zweite Violinen, etc.).</p>
                <p class="pt-3">Bitte beachten Sie, dass wir Instrumentalstimmen, die später in ein Heft eingelegt
                  werden,
                  am rechten Rand 3–5 mm kleiner schneiden, damit diese nicht überstehen.</p>
              </div>
              <div class="flex w-full mt-3">
                <div class="w-1/2 p-2">
                  <p class="pt-3">Stimme benennen (bspw. »Violine 1«)</p>
                  <div class="w-2/5 mt-5">
                    <input placeholder="Stimmenname eingeben ..." class=" p-3" type="string" v-model="newVoice.name"
                      @blur="validateNewVoiceName">
                  </div>
                  <div v-if="!formValidations.newVoiceNameValid" class="text-red-500">{{ validationMessages.newVoiceName
                    }}</div>
                </div>
                <div class="w-1/2 p-2">
                  <div class="flex flex-col">
                    <div class="flex mt-3">
                      <p>Seitenanzahl Inhalt:</p>
                      <div class="min-w-10 ml-10">
                        <select id="mySelect" class="form-select mt-1 block w-full" v-model="newVoice.pages">
                          <option selected v-bind:value="4">4</option>
                          <option v-for="item in pages" v-bind:value="item">{{ item }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="flex mt-5">
                      <p>Exemplare pro Set:</p>
                      <div class="min-w-13 ml-11">
                        <select id="mySelect" class="form-select mt-1 block w-full" v-model="newVoice.quantity">
                          <option selected v-bind:value="1">1</option>
                          <option v-for="item in voiceAmount" v-bind:value="item">{{ item }}</option>
                        </select>
                      </div>

                    </div>
                    <div class="flex flex-col space-y-4 mt-5">
                      <div v-for="fileIndex in [3]" :key="fileIndex" class="block mb-3">
                        <div class="block mb-3">
                          <label class="block font-bold">
                            {{ getFileHeadline(1) }}
                          </label>
                        </div>
                        <label v-if="!files[fileIndex].uploaded && !files[fileIndex].isloading" class="block">
                          <span class="sr-only">Upload File {{ fileIndex }}</span>
                          <input type="file"
                            @change="handleFileSelection($event, fileIndex); validateFileSelection(fileIndex)" class="block w-full text-sm text-gray-900
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-black-50 file:text-black-700
                 hover:file:bg-blue-100" />
                        </label>
                        <div v-if="!formValidations.fileSelectedValid" class="text-red-500">{{
        validationMessages.fileSelected }}</div>
                        <div v-if="files[fileIndex].isloading" class="flex flex-col justify-between">
                          <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 border border-black">
                            <div :style="{ width: files[fileIndex].progress + '%' }"
                              class="bg-blue-600 h-2.5 rounded-full">
                            </div>
                          </div>
                        </div>
                        <div v-if="!files[fileIndex].isloading && files[fileIndex].uploaded"
                          class="flex flex-col justify-between ">
                          <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-800">{{ files[fileIndex].name }}</span>
                            <button @click.prevent="deleteFile(fileIndex)"
                              class="ml-2 btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- //@click="addVoice()" -->
                    <button @click.prevent="addVoice(3)" class="btn bg-black text-white rounded-full" type="submit">
                      <img src="@/assets/svg/iconWhite.svg" alt="Add" class="mr-2">
                      <span>Stimme Hinzufügen</span>
                    </button>
                    <p class="pt-4">
                      Sie können beliebig viele weitere Instrumentalstimmen hinzufügen.
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-full pt-4">
                <h3 class="pl-2">Hinzugefügte Stimmen:</h3>
                <div class="overflow-x-auto relative">
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="py-3 px-6">Stimmenname:</th>
                        <th scope="col" class="py-3 px-6">Seitenanzahl Inhalt:</th>
                        <th scope="col" class="py-3 px-6">Exemplare pro Set:</th>
                        <th scope="col" class="py-3 px-6">Datei Name:</th>
                        <th scope="col" class="py-3 px-6">Löschen:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <client-only>
                        <tr v-for="(voice, index) in voices"
                          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td class="py-4 px-6">{{ voice.name }}</td>
                          <td class="py-4 px-6">{{ voice.pages }}</td>
                          <td class="py-4 px-6">{{ voice.quantity }}</td>
                          <td class="py-4 px-6">{{ voice.uploadName }}</td>
                          <td class="py-4 px-6">
                            <button @click.prevent="removeVoice(index)" class="p-0 m-0 bg-transparent">
                              <img src="@/assets/svg/plusBlack.svg" alt="Delete" class="transform rotate-45">
                            </button>
                          </td>
                        </tr>
                      </client-only>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
            <div class="flex flex-wrap pt-3">
              <!-- Column 1 (3/5) -->
              <div class="w-full sm:w-3/5 p-2">
                <h2>10. In den Warenkorb*</h2>
                <p>Bitte legen Sie das Projekt nun in den Warenkorb. Sie können danach noch weitere Projekte anlegen und
                  gemeinsam in einer Lieferung versandkostenoptimiert bestellen.</p>
              </div>
              <!-- Column 2 (2/5) -->
              <div class="w-full sm:w-2/5 p-2">
                <!-- Second row, identical to the first row -->
                <button v-if="!isLoading" type="submit" class="btn bg-black text-white rounded-full">
                  <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 10px;">Jetzt
                  in den Warenkorb legen
                </button>
                <div v-else role="status">
                  <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor" />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col md:w-3/9 sticky top-0 border-12 border-white">
            <div class="green w-full p-5">
              <div>
                <div>
                  <p>Ihr Preis pro Exemplar:</p>
                  <h2 class="font-bold pt-3">€ {{ priceString }}</h2>
                  <p style="font-size: x-small;">Preis inkl. 7% MwSt., ggf. zzgl. Versandkosten</p>
                </div>
              </div>
              <div>
                <div class="pt-3">
                  <p>Ihr Preis für die gewünschte Auflagenhöhe:</p>
                  <h2 class="font-bold pt-3">€ {{ projectPriceString }}</h2>
                  <p style="font-size: x-small;">Preis inkl. 7% MwSt., ggf. zzgl. Versandkosten</p>
                </div>
              </div>
              <div class="flex">
                <div class="pt-3 w-1/2">
                  <p>Ihre Auflage:</p>
                  <div class="flex mt-3">

                    <button @click="count(false)" type="button" class="mr-3">
                      <img src="@/assets/svg/remove.svg" alt="Decrease quantity" class="h-4 w-4">
                    </button>

                    <input class="green text-center text-2xl" max="300" type="number" min="0" v-model="productQuantity">

                    <button @click="count(true)" type="button" class="ml-3">
                      <img src="@/assets/svg/add.svg" alt="Increase quantity" class="h-4 w-4">
                    </button>

                  </div>
                </div>
                <div class="pt-3 w-1/2">
                  <p>Produktionsdauer:</p>
                  <h2 class="pt-3">{{ productionTime }} </h2>
                  <p style="font-size: x-small;">zzgl. Postlaufzeit</p>
                </div>
              </div>
              <div>
                <div>
                  <button v-if="!isLoading" type="submit"
                    class="btn bg-black text-white rounded-full mt-3 border border-black">
                    <img src="@/assets/svg/plus.svg" alt="Avatar" style="margin-right: 10px;">Jetzt
                    in den Warenkorb legen
                  </button>
                  <div v-else role="status">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
              <div class="pt-4">
                <table class="table border-0" style="font-size:small ; border-style: hidden !important;">
                  <thead>
                    <tr>
                      <th scope="col">Auflage</th>
                      <th scope="col">Preis / Stck.</th>
                      <th scope="col">Sie sparen:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- @click="setAmount(discount.amount)" -->
                    <tr class="border-0" style="cursor: pointer;" :id="'discountgroup' + discount.id"
                      v-for="(discount, index) in discounts"
                      :class="{ 'highlight-discount': discount.id === currentDiscountId }"
                      @click="setAmount(discount.amount)">
                      <th v-if="discount.amount == 1" scope="">1</th>
                      <th v-if="discount.amount > 1 && discount.amount <= 200" scope="">{{
        discount.amount }} – {{ discounts[index + 1].amount - 1 }}</th>
                      <th v-if="discount.amount > 200" scope="">Ab 250</th>
                      <td>€ {{ (singlePrice * (1 - discount.discount)).toFixed(2) }}</td>
                      <td>{{ (discount.discount * 100).toFixed(0) }} %</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="pink w-full mt-12 p-5" style=" margin-top: 20px;">
              <h1 class="font-bold">
                Kostenfreier
                Versand
              </h1>
              <img src="@/assets/svg/local_shipping.svg" alt="Avatar" style=" margin-top: 150px; width: 10%; ">
              <h1 class="mt-2 font-bold">
                Ab 50,- Euro
                Einkaufswert
              </h1>
            </div>
          </div>
        </div>
      </form>
    </section>
    <div class="flex flex-col md:flex-row">
      <div class="red md:w-3/9 w-full border-12 border-white flex flex-col">
        <div class="flex flex-col flex-g p-5">
          <div class="flex">
            <img src="@/assets/svg/report.svg" class="max-w-10 mr-5" alt="Avatar">
            <h2>Maßvorgaben
            </h2>
          </div>

          <p class="mt-12">Um bestmögliche Qualität in der Druckproduktion zu gewährleisten, ist
            es notwendig, dass die
            Druckdaten korrekt angelegt sind.
            Bitte laden Sie die Maßvorgaben herunter und legen Sie Ihre Druckdaten danach an.
          </p>
          <a href=" https://firebasestorage.googleapis.com/v0/b/pocselfpublish.appspot.com/o/uploads%2FDruckdaten_Print_data_2023.pdf?alt=media&token=e8196ae8-3679-4f5a-9445-48d46724fc65"
            target="_blank">
            <button type="button" class="btn border border-black bg-black text-white rounded-full mt-3"
              style="width: 100%;">
              <img src="@/assets/svg/download.svg" alt="Avatar"
                style="height: 19px; margin-right: 10px; padding-left: 5px;">
              <p class="inline mt-2">Maßvorgaben (PDF)</p>
            </button>
          </a>
        </div>
      </div>
      <div class="yellow md:w-3/9 w-full border-12 border-white flex flex-col p-5">
        <img src="@/assets/svg/mark_email_read.svg" class="max-w-10" alt="Avatar">
        <h2 style="margin-top: 60px;">
          Sie benötigen Hilfe?
          Schreiben Sie uns!
        </h2>
        <p> Kommen Sie nicht weiter? Gerne sind wir für Sie da. Bitte schreiben Sie uns eine E-Mail:
        </p>
        <h5 class="font-bold mt-3"> fragen@capellaprint.com
        </h5>
        <p> Wir melden uns baldmöglichst bei Ihnen zurück. Gemeinsam finden wir eine Lösung!</p>
      </div>
      <div class="md:w-3/9 w-full border-12 border-white flex flex-col">

      </div>
    </div>
  </div>
</template>
<style>
/* For Chrome, Safari, Edge, Opera */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* For Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

.highlight-discount {
  background-color: white;
}

@media (max-width: 639px) {
  .smmax-h-xs {
    max-height: 300px;
    /* Example max-height for extra-small screens */
  }
}
</style>