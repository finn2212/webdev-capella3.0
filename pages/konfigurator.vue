<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';
import { Product } from "@shopware-pwa/types";

interface ProductItem {
  product: any; // Replace 'any' with a more specific type if known
  quantity: any;
}

interface Voice {
  name: string;
  url: string;
  pages: number;
  quantity: number;
  uploadName: string;
}
interface PdfData {
  name: string;
  // Include other properties as needed, such as URL or size
}

const { pushSuccess } = useNotifications();
const { codeErrorsNotification } = useCartNotification();

// const route = useRoute();
// Primitive values using ref
const price = ref(0);
const priceString = ref('0');
const projectPriceString = ref('0');
const productionTime = ref("1–3 Tage");
const isOpen = ref(false);
const enveloped = ref('false');
const discount = ref(1);
const pagesQuantitiy = ref(4);
const voiceName = ref("");
const voicePages = ref(4);
const voiceQuantity = ref(1);
const handlingPrice = ref(3.8);
const singlePrice = ref(4.29);
const pagePrice = ref(0.15);
const quantitiy = ref(1);
const handlingVoice = ref(1);
const pdf1 = ref('');
const pdf2 = ref('');
const progress1 = ref(null);
const isUpload1 = ref(false);
const isUpload2 = ref(false);
const isUpload3 = ref(false);
const voicePagePrice = ref(0.15);
const access_token = ref('');
const projectType = ref(1);
const uploadValue = ref(0);
const uploadValue2 = ref(0);
const uploadValue3 = ref(0);
const productName = ref("");
const format = ref('true');
const paperFormat = ref(1);
const color = ref('false');
const voicePrice = ref(0);
const envelopedPrice = ref(0);
const bindingType = ref("true");
const errorMassage = ref("");
const totalVoicePrice = ref(0);
const bindingTypePrice = ref(0);
const weight = ref(0);
const swEndPoint = ref("");
const accesstoken = ref("");
const pdfData1 = ref<PdfData>({ name: "" });
const pdfData2 = ref<PdfData>({ name: "" });
const pdfData3 = ref<PdfData>({ name: "" });
const isLoading = ref(false);
const products = ref<ProductItem[]>([]);
const fetchedProduct = ref<Product>({
  active: false,
  apiAlias: 'product',
  autoIncrement: 0,
  available: false,
  availableStock: null,
  calculatedCheapestPrice: {
    unitPrice: 0,
    quantity: 0,
    totalPrice: 0,
    calculatedTaxes: [],
    taxRules: [],
    referencePrice: {
      price: 0,
      purchaseUnit: 0,
      referenceUnit: '',
      unitName: '',
      apiAlias: undefined
    },
    hasRange: undefined,
    listPrice: null,
    regulationPrice: null,
    apiAlias: '',
    variantId: undefined
  },
  calculatedListingPrice: null,
  calculatedMaxPurchase: 0,
  calculatedPrice: {
    unitPrice: 0,
    quantity: 0,
    totalPrice: 0,
    calculatedTaxes: [],
    taxRules: [],
    referencePrice: {
      price: 0,
      purchaseUnit: 0,
      referenceUnit: '',
      unitName: '',
      apiAlias: undefined
    },
    hasRange: undefined,
    listPrice: null,
    regulationPrice: null,
    apiAlias: '',
    variantId: undefined
  },
  calculatedPrices: [],
  canonicalProduct: undefined,
  canonicalProductId: null,
  categories: null,
  categoriesRo: null,
  categoryIds: [],
  categoryTree: null,
  cheapestPrice: null,
  childCount: null,
  children: null,
  cmsPage: null,
  cmsPageId: null,
  configuratorSettings: null,
  cover: {
    productId: '',
    mediaId: '',
    position: 0,
    media: {
      mimeType: '',
      fileExtension: '',
      fileSize: 0,
      title: null,
      metaData: {
        hash: undefined,
        type: 0,
        width: 0,
        height: 0
      },
      uploadedAt: null,
      alt: null,
      url: '',
      fileName: '',
      translations: null,
      thumbnails: [],
      hasFile: false,
      private: false,
      _uniqueIdentifier: undefined,
      versionId: undefined,
      translated: {
        alt: null,
        title: null,
        customFields: null
      },
      createdAt: '',
      updatedAt: null,
      extensions: undefined,
      id: '',
      customFields: null,
      apiAlias: 'media'
    },
    customFields: null,
    _uniqueIdentifier: undefined,
    versionId: '',
    translated: [],
    createdAt: '',
    updatedAt: null,
    extensions: undefined,
    id: '',
    apiAlias: 'product_media'
  },
  coverId: null,
  createdAt: '',
  crossSellings: null,
  customFields: {},
  updatedAt: null,
  deliveryTime: {
    id: '',
    name: null,
    min: 0,
    max: 0,
    unit: '',
    shippingMethods: undefined,
    translations: undefined,
    translated: {
      customFields: {},
      name: ''
    },
    customFields: null,
    createdAt: '',
    updatedAt: null,
    apiAlias: ''
  },
  deliveryTimeId: null,
  description: null,
  displayGroup: '',
  downloads: undefined,
  ean: null,
  extensions: [],
  height: null,
  id: '',
  isCloseout: null,
  isNew: false,
  keywords: null,
  length: null,
  listingPrices: null,
  mainCategories: null,
  manufacturer: null,
  manufacturerId: null,
  manufacturerNumber: null,
  markAsTopseller: null,
  maxPurchase: null,
  media: [],
  metaDescription: null,
  metaTitle: null,
  minPurchase: null,
  name: null,
  options: null,
  packUnit: null,
  packUnitPlural: null,
  parent: null,
  parentId: null,
  parentVersionId: null,
  price: null,
  prices: null,
  productManufacturerVersionId: null,
  productNumber: '',
  productReviews: null,
  properties: null,
  propertyIds: null,
  purchasePrice: null,
  purchaseSteps: null,
  purchaseUnit: null,
  ratingAverage: null,
  referenceUnit: null,
  releaseDate: null,
  restockTime: 0,
  sales: 0,
  seoCategory: null,
  seoUrls: null,
  shippingFree: null,
  sortedProperties: null,
  states: [],
  stock: 0,
  streamIds: null,
  streams: null,
  tagIds: null,
  tags: null,
  tax: {
    taxRate: 0,
    name: '',
    products: undefined,
    customFields: null,
    translated: [],
    createdAt: '',
    updatedAt: null,
    position: 0,
    id: '',
    apiAlias: ''
  },
  taxId: null,
  translated: {
    name: null,
    description: '',
    metaDescription: null,
    keywords: null,
    metaTitle: null,
    customFields: {},
    packUnit: null,
    packUnitPlural: null
  },
  translations: null,
  unit: null,
  unitId: null,
  versionId: '',
  weight: null,
  width: null
});

const voices = ref<Voice[]>([]); // Array of 'Voice'
const baseVoicePrice = ref(16.4);
const voiceAmount = ref([
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
]);
const pages = ref([
  8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168, 172, 176, 180, 184, 188, 192, 196, 200, 204, 208, 212, 216, 220, 224, 228, 232, 236, 240, 244, 248, 252, 256, 260, 264, 268, 272, 276, 280, 284, 288, 292, 296, 300, 304, 308, 312, 316, 320, 324, 328, 332, 336, 340, 344, 348, 352, 356, 360, 364, 368, 372, 376, 380, 384, 388, 392, 396, 400
]);
const discounts = reactive([
  { id: 1, discount: 0, amount: 1 },
  { id: 2, discount: 0.45, amount: 2 },
  { id: 3, discount: 0.55, amount: 10 },
  { id: 4, discount: 0.63, amount: 25 },
  { id: 5, discount: 0.68, amount: 50 },
  { id: 6, discount: 0.70, amount: 75 },
  { id: 7, discount: 0.72, amount: 100 },
  { id: 8, discount: 0.74, amount: 150 },
  { id: 9, discount: 0.75, amount: 200 },
  { id: 10, discount: 0.76, amount: 250 }

]);
onMounted(() => {
  calculatePrice(); // Make sure calculatePrice is defined appropriately
});


const swEnvironment = useRuntimeConfig(); // Nuxt 3 way to access runtime config
if (typeof swEnvironment.public.shopware.shopwareEndpoint === 'string' && typeof swEnvironment.public.shopware.shopwareAccessToken === 'string') {
  swEndPoint.value = swEnvironment.public.shopware.shopwareEndpoint;
  accesstoken.value = swEnvironment.public.shopware.shopwareAccessToken;
} else {
  console.error('shopware_endpoint is not a string');
}
const close = () => {
  isOpen.value = false;
  const stickyBar = document.getElementById("stickyBar");
  if (stickyBar) {
    stickyBar.classList.add('sticky-top');
  }
};
const open = () => {
  isOpen.value = true;
  const stickyBar = document.getElementById("stickyBar");
  if (stickyBar) {
    stickyBar.classList.remove('sticky-top');
  }
};

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
      // Handle the error as an instance of Error
    } else {
      console.error("An unknown error occurred.");
      // Handle the case where the error is not an Error instance
    }
    th error;
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
    return response.data; // Or handle the response data as needed
  } catch (error) {
    if (error instanceof Error) {
      // Properly handle the error if it's an instance of Error
      console.error("Product creation error:", error.message);
    } else {
      // Handle non-Error instances
      console.error("An unknown error occurred during product creation.");
    }
    th error;
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
      open();
      return false;
    } else {
      return true;
    }
  } else if (projectType.value === 2) {
    if (pdf1.value === "" || productName.value === "" || voices.value.length === 0) {
      errorMassage.value = "Bitte laden Sie eine Notendatei hoch, vergeben sie einen Projektnamen und fügen Sie eine Stimme hinzu bevor Sie das Produkt in Ihren Warenkorb legen";
      open();
      return false;
    } else {
      return true;
    }
  } else if (projectType.value === 3 || productName.value === "") {
    if (voices.value.length === 0) {
      errorMassage.value = "Bitte vergeben Sie eine Stimmenbezeichnung und laden Sie eine Notendatei hoch, bevor Sie die Stimme dem Projekt hinzufügen.";
      open();
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
    `<span>Link: <a href="${pdf1.value}">Downloadlink Notenheft</a></span><br/>`;

  if (pdf2.value) {
    desc += `<span>Link: <a href="${pdf2.value}">Downloadlink Umschlag</a></span><br/>`;
  }

  desc += `<span>Seitenzahl: ${pagesQuantitiy.value}</span><br/><p>\n</p>`;

  if (voices.value.length > 0) {
    desc += '<p><big>Stimmen</big></p>';
    voices.value.forEach(voice => {
      desc += `<span>Stimmenbezeichnung: ${voice.name}</span><br/>` +
        `<span>Link: <a href="${voice.url}">Downloadlink</a></span><br/>` +
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

    return response.data; // Or handle the response data as needed
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetching product error:", error.message);
    } else {
      console.error("An unknown error occurred during product fetching.");
    }
    th error;
  }
};

const getProperties = () => {
  let ids = [];

  if (projectType.value == 1) {
    ids.push({ id: 'a2dcd3008de644c784d2cdfec32d91d0' });
  } else if (projectType.value == 2) {
    ids.push({ id: '92c1ed6e0a11440aa5c544d87fc780c9' });
  } else if (projectType.value == 3) {
    ids.push({ id: '587a3d6981404ed4b9de471d120e14ad' });
  }

  if (format.value === 'false') {
    ids.push({ id: 'e1d6ac670a3442448644bc34a7f0d469' });
  } else if (format.value === 'true') {
    ids.push({ id: 'bb3741f73af54d46b1d0808f74f3923d' });
  }

  if (color.value === 'true') {
    ids.push({ id: 'cfdae0f64bf240a6ae5202db7579f8a0' });
  } else if (color.value === 'false') {
    ids.push({ id: '7c2ad08862fb4011ae45d912c1ca4c3d' });
  }
  switch (paperFormat.value) {
    case 1:
      ids.push({ id: 'bdac9a79733341129bdc32cceaa29ddb' });
      break;
    case 2:
      ids.push({ id: 'afe5b55949fc41d399ac39e5ff24f4b6' });
      break;
    case 3:
      ids.push({ id: '6753f984ea17467794b4068f294053be' });
      break;
    case 4:
      ids.push({ id: '4ddf6e278920458cba821346e53b04e9' });
      break;
    case 5:
      ids.push({ id: '2866e65da9a749cd88a84412e212f12a' });
      break;
    case 6:
      ids.push({ id: '378502b6aa384914b27369996fabd0bc' });
      break;
    default:
      ids.push({ id: 'bdac9a79733341129bdc32cceaa29ddb' });
      break;
  }

  if (bindingType.value === 'true') {
    ids.push({ id: 'd5e18caaadd34f70877e38b742ad22ff' });
  } else if (bindingType.value === 'false') {
    ids.push({ id: 'b5559576c3634ab0ba178c92194b5691' });
  }

  if (enveloped.value === 'true') {
    ids.push({ id: '28e2313979804380b8f303e0f21ffcad' });
  } else if (enveloped.value === 'false') {
    ids.push({ id: '242e68c2dfde4ec2afe3fd478e2a0f85' });
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
  if (quantitiy.value === 1) {
    discount.value = 1;
    productionTime.value = "1–3 Tage";
    //setDiscountGroup(1);
  } else if (quantitiy.value > 1 && quantitiy.value < 10) {
    discount.value = 0.45;
    productionTime.value = "1–3 Tage";
    //setDiscountGroup(2);
  } else if (quantitiy.value > 9 && quantitiy.value < 24) {
    discount.value = 0.55;
    productionTime.value = "1–3 Tage";
    //setDiscountGroup(3);
  } else if (quantitiy.value > 24 && quantitiy.value < 50) {
    discount.value = 0.63;
    productionTime.value = "1–3 Tage";
    //setDiscountGroup(4);
  } else if (quantitiy.value > 49 && quantitiy.value < 75) {
    discount.value = 0.68;
    productionTime.value = "1–3 Tage";
    //setDiscountGroup(5);
  } else if (quantitiy.value > 74 && quantitiy.value < 100) {
    discount.value = 0.70;
    productionTime.value = "1–3 Tage";
    //setDiscountGroup(6);
  } else if (quantitiy.value > 99 && quantitiy.value < 150) {
    discount.value = 0.72;
    productionTime.value = "3–5 Tage";
    //setDiscountGroup(7);
  } else if (quantitiy.value > 149 && quantitiy.value < 200) {
    discount.value = 0.74;
    productionTime.value = "3–5 Tage";
    //setDiscountGroup(8);
  } else if (quantitiy.value > 199 && quantitiy.value < 250) {
    discount.value = 0.75;
    productionTime.value = "3–5 Tage";
    //setDiscountGroup(9);
  } else if (quantitiy.value >= 250) {
    discount.value = 0.76;
    productionTime.value = "3–5 Tage";
    //setDiscountGroup(10);
  }
};

const setPagePrice = () => {
  if (color.value === 'false') {
    pagePrice.value = paperFormat.value < 4 ? 0.15 : 0.25;
  } else {
    pagePrice.value = paperFormat.value < 4 ? 0.20 : 0.30;
  }
};

const setBinding = () => {
  bindingType.value = (pagesQuantitiy.value >= 88 || format.value === 'false' || paperFormat.value > 3) ? 'false' : 'true';
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
  if (quantitiy.value === 0) {
    projectPriceString.value = priceString.value;
  } else {
    projectPriceString.value = (price.value * quantitiy.value).toFixed(2).replace(".", ",");
  }
};

const reset = (full: boolean) => {
  if (full) {
    quantitiy.value = 1;
    projectType.value = 1;
    productName.value = "";
    pdf1.value = '';
    pdf2.value = '';
    pdfData1.value.name = "";
    pdfData2.value.name = "";
  }
  productionTime.value = "1–3 Tage";
  enveloped.value = 'false';
  discount.value = 1;
  format.value = 'true';
  paperFormat.value = 1;
  color.value = 'false';
  bindingType.value = "true";
  voices.value = [];
  bindingTypePrice.value = 0;
  totalVoicePrice.value = 0;

  calculatePrice();
};

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
  if (val === "true") {
    envelopedPrice.value = 1.5;
  } else if (val === "false") {
    envelopedPrice.value = 0;
  }
  calculatePrice();
});

watch(pagesQuantitiy, () => {
  calculatePrice();
});

watch(quantitiy, (newValue) => {
  if (newValue < 0) {
    quantitiy.value = 0;
  }
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
    <section class="flex flex-col md:flex-">
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
      <div class="md:w-3/9 w-full border-12 border-white flex flex-col">
        <img class="card-img-top img" src="@/assets/images/pic9.png" alt="Card image cap">
      </div>
      <div class="darkblue md:w-3/9 w-full border-12 border-white flex flex-col">
        <img class="card-img-top img" src="@/assets/images/pic10.png" alt="Card image cap">
      </div>
    </section>
    <section class="flex flex-col md:flex-">
      <div class="grey md:w-6/9 w-full border-12 border-white flex flex-col">
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
      <div class="green md:w-3/9 w-full border-12 border-white flex flex-col">

      </div>
    </section>
  </div>
  <div>
    <!--Prouct Cusomizer Sections-->
    <section class="pt-5">
      <div class="container justify-center">

        <div class="">
          <h1 class="">
            Konfigurieren Sie Ihr Notenheft
          </h1>
          <div class="      ">
            <div class="">
              <div class=" ">
                <h2 class="">
                  1. Projekttitel*
                </h2>
                <p>Bitte vergeben Sie hier einen eindeutigen Projekttitel.</p>
              </div>
              <div class="col">
                <input placeholder="Projekttitel eingeben ..." class=" p-3"
                  style="border-width: 1px;  width: 300px; border-radius:5px; border-style: solid; border-color: black; margin-top: 20px;"
                  type="string" v-model="productName">
              </div>
            </div>
            <div v-if="projectType != 3" class="w-100 pt-5"></div>
            <div class="">
              <div class=" ">
                <h2>2. Art des Projekts*</h2>
                <p>Zu Beginn ist es notwendig, zu wissen, um welche Art von Notenprojekt es sich handelt.
                </p>
                <p>
                  Wählen Sie zwischen den gebräuchlichsten Formen: </p>
                <ul>
                  <li>Partitur/Notenheft ohne separate Stimmauszüge / Instrumentalstimmen</li>
                  <li>Partitur mit separaten Stimmauszügen / Instrumentalstimmen</li>
                  <li> Stimmauszüge / Instrumentalstimmen ohne Partitur"
                  </li>
                </ul>
              </div>
              <div class="col pt-5">
                <div class=" mt-3">
                  <div class="col-8">
                    <p>Notenheft ohne
                      Instrumentalstimmen</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="one" value="1" v-model="projectType" />
                  </div>
                </div>
                <div class="">
                  <div class="col-8">

                    <p>Notenheft mit
                      Instrumentalstimmen</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="two" value="2" v-model="projectType" />
                  </div>
                </div>
                <div class="">
                  <div class="col-8">
                    <p>Stimmensatz / Chorsatz</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="one" value="3" v-model="projectType" />
                  </div>
                </div>
              </div>
              <div v-if="projectType != 3" class="w-100 pt-5"></div>
              <div v-if="projectType != 3" class=" ">
                <h2>3. Papierformat*</h2>
                <p>Bitte wählen Sie das Format aus, das die Noten haben.
                  Sie können zwischen gebräuchlichen musikalientypischen Papierformaten wählen.
                </p>
                <p> Bitte beachten Sie: Wenn Sie unterschiedliche Formate innerhalb eines Projekts haben
                  (bspw. Partitur in DIN A3 und Stimmen in DIN A4), legen Sie bitte für jedes Format ein
                  neues Projekt an.
                </p>
                <p class="m-0">Beispiel:</p>
                <li> »Klavierauszug Chorheft Cäcilia«, Concertformat</li>
                <li> »Chorsatz Chorheft Cäcilia«, DIN A4</li>
              </div>
              <div v-if="projectType != 3" class="col pt-4">
                <div class=" mt-3">
                  <div class="col-8">
                    <p>DIN A4 (21 x 29,7 cm)</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="one" value="1" v-model="paperFormat" />
                  </div>
                </div>
                <div class="">
                  <div class="col-8">
                    <p>Klavierauszug (19 x 27 cm)</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="one" value="2" v-model="paperFormat" />
                  </div>
                </div>
                <div class="">
                  <div class="col-8">
                    <p>Concert (22,8 x 30,5 cm)</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="two" value="3" v-model="paperFormat" />
                  </div>
                </div>
                <div class="">
                  <div class="col-8">
                    <p>DIN B4 (25 x 35,3 cm)</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="two" value="4" v-model="paperFormat" />
                  </div>
                </div>
                <div class="">
                  <div class="col-8">
                    <p>DIN A3 (29,7 x 42 cm)</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="one" value="5" v-model="paperFormat" />
                  </div>
                </div>
                <div class="">
                  <div class="col-8">
                    <p>Dirigent (31,5 x 46 cm)</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="two" value="6" v-model="paperFormat" />
                  </div>
                </div>
              </div>
              <div v-if="projectType != 3" class="w-100 pt-5"></div>
              <div v-if="projectType != 3" class=" ">
                <h2>4. Ausrichtung*</h2>
                <p>Bitte geben Sie nun an, ob die Noten im Hoch– oder im Querformat angelegt sind.
                </p>
                <p>
                  Bitte beachten Sie, dass Sie innerhalb eines Projekts die Ausrichtungen nicht mischen
                  können.
                </p>
              </div>
              <div v-if="projectType != 3" class="col pt-5">
                <div class=" mt-3">
                  <div class="col-8">
                    <p>Notenheft Hochformat</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="one" value="true" v-model="format" />
                  </div>
                </div>
                <div class="">
                  <div class="col-8">
                    <p>Notenheft Querformat</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="two" value="false" v-model="format" />
                  </div>
                </div>
              </div>
              <div v-if="projectType != 3" class="w-100 pt-5"></div>
              <div v-if="projectType != 3" class=" ">
                <h2>5. Farbigkeit Inhalt*</h2>
                <p>Ihre Noten können im Innenteil entweder schwarzweiß oder farbig gedruckt werden.
                </p>
                <p>
                  Falls Ihr Notenprojekt einen Umschlag hat, wird dieser ohne Aufpreis farbig gedruckt.
                  Instrumentalstimmen werden generell schwarzweiß gedruckt.
                </p>
              </div>
              <div v-if="projectType != 3" class="col pt-5">
                <div class=" mt-3">
                  <div class="col-8">
                    <p>Inhalt schwarzweiß</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="one" value="false" v-model="color" />
                  </div>
                </div>
                <div class="">
                  <div class="col-8">
                    <p>Inhalt farbig</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="two" value="true" v-model="color" />
                  </div>
                </div>
              </div>
              <div v-if="projectType != 3" class="w-100 pt-5"></div>
              <div v-if="projectType != 3" class=" ">
                <h2>6. Seitenanzahl*</h2>
                <p>Bitte geben Sie die Gesamtseitenanzahl Ihrer Datei an. Aus produktionstechnischen Gründen
                  muss diese immer durch 4 teilbar sein.
                </p>
                <p>Sie können zwischen 4 und 400 Seiten Umfang wählen. Bitte beachten Sie, dass wir Ihr Heft
                  in den Formaten DIN A4, Klavierauszug und Concert bei weniger als 88 Seiten Inhalt
                  standardmäßig klammerheften.
                </p>
              </div>
              <div v-if="projectType != 3" class="col-3 pt-5">
                <p>Seitenanzahl Inhalt:</p>
              </div>
              <div v-if="projectType != 3" class="col pt-5">
                <select id="mySelect" class="custom-select selectBtn" v-model="pagesQuantitiy">
                  <option selected v-bind:value="4"> 4
                  </option>
                  <option v-for="item in pages" v-bind:value="item">{{ item }}
                  </option>
                </select>
              </div>
              <div v-if="projectType != 3" class="w-100 pt-5"></div>
              <div v-if="projectType != 3" class=" ">
                <h2>7. Bindung*</h2>
                <p>
                  Bitte beachten Sie, dass bei den Formaten DIN B4, DIN A3 und Dirigent sowie bei allen
                  Querformaten und bei mehr als 88 Seiten Inhalt nur Spiralbindung verfügbar ist.
                </p>
              </div>
              <div class="col pt-5">
                <div class=" mt-3">
                  <div class="col-8">
                    <p v-if="bindingType == 'true'">Bindung: Klammerheftung</p>
                    <p v-if="bindingType == 'false'">Bindung: Spiralbindung</p>
                  </div>
                </div>
              </div>
              <div v-if="projectType != 3" class="w-100 pt-5"></div>
              <div v-if="projectType != 3" class=" ">
                <h2>8. Umschlag</h2>
                <p>Unser hochweißer Umschlagkarton mit 260g/m&#178; gibt Farben brillant wieder und besitzt
                  ein
                  hervorragendes Aufschlagverhalten. Die einseitig matte Oberfläche lässt sich
                  hervorragend bedrucken und bricht auch bei starker Beanspruchung nicht auf.</p>
              </div>
              <div v-if="projectType != 3" class="col pt-5">
                <div class=" mt-3">
                  <div class="col-8">
                    <p>Mit Umschlag:</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="one" value="true" v-model="enveloped" />
                  </div>
                </div>
                <div class="">
                  <div class="col-8">

                    <p>Ohne Umschlag:</p>
                  </div>
                  <div class="col-1">
                    <input type="radio" id="two" value="false" v-model="enveloped" />
                  </div>
                </div>
              </div>
              <div v-if="projectType != 3" class="w-100 pt-5"></div>
              <div v-if="projectType != 3" class=" ">
                <h2>9. Notenupload*</h2>
                <p>Hier laden Sie nun die Druckdaten als PDF auf unseren Server – ganz bequem und einfach.
                  Ihre Daten werden verschlüsselt übertragen.
                  Wir prüfen diese auf Druckbarkeit und melden uns ggf. per E-Mail, falls etwas nicht
                  passen sollte.</p>
              </div>
              <div v-if="projectType != 3" class="col mt-4">
                <div class="">
                  <div class="col-auto">
                    <p>Noten-PDF /Inhalt:*</p>
                  </div>
                  <div class="col">
                    <div v-if="pdfData1 == null" class="">
                      <div>
                        <button class="btn btn uploadBtn" style="color: black !important;" @click="click1"> <img
                            src="@/assets/svg/plusBlack.svg" alt="Avatar" style=" margin-right: 5px;">Datei
                          wählen</button>
                        <input type="file" ref="input1" style="display: none" @change="previewImage"
                          accept="application/pdf">
                      </div>
                    </div>
                    <div v-if="pdfData1 != null && isUpload1 == false" class="">
                      <div class="col-auto">
                        {{ pdfData1.name }}
                      </div>
                      <div class="col-auto">
                        <button class="btn btn uploadBtn" style="color: black !important; margin-left:5px"
                          @click="deletePdf">
                          <img src="@/assets/svg/plusBlack.svg" alt="Avatar" style="transform: rotate(45deg);">
                        </button>
                      </div>
                    </div>
                    <div v-if="isUpload1 == true" class=" mt-3">
                      <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar"
                          :style="{ width: uploadValue + '%' }" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class=" mt-5">
                  <div class="col-auto">
                    <p>ggf. <br> Umschlagdatei:</p>
                  </div>
                  <div class="col">
                    <div v-if="pdfData2 == null" class="">
                      <div class="" v-if="pdfData2 == null">
                        <button class="btn btn uploadBtn ms-0 ms-xl-3" style="color: black !important;" @click="click2">
                          <img src="@/assets/svg/plusBlack.svg" alt="Avatar" style="margin-right: 5px;">Datei wählen
                        </button>
                        <input type="file" ref="input2" style="display: none" @change="previewImage2"
                          accept="application/pdf">
                      </div>
                    </div>
                    <div v-if="pdfData2 != null && isUpload2 == false" class="">
                      <div class="col-8">
                        {{ pdfData2.name }}
                      </div>
                      <div class="col">
                        <button class="btn btn uploadBtn" style="color: black !important;  margin-left:5px "
                          @click="deletePdf2">
                          <img src="@/assets/svg/plusBlack.svg" alt="Avatar" style="transform: rotate(45deg);">
                        </button>
                      </div>
                    </div>
                    <div v-if="isUpload2 == true" class=" mt-3">
                      <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar"
                          :style="{ width: uploadValue2 + '%' }" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class=" pt-5" v-if="projectType != 1">
              <div class=" ">
                <h2 v-if="projectType == 2">10. Instrumentalstimmen*</h2>
                <h2 v-if="projectType == 3">3. Instrumentalstimmen*</h2>
                <p>Wenn Ihr Projekt Instrumentalstimmen enthält, können Sie diese hier konfigurieren.
                </p>
                <p>
                  Bitte geben Sie an, wie viele Seiten die Stimmeneinleger haben.
                </p>
                <p>Wählen Sie bitte zusätzlich aus, wie viele Exemplare von jeder Stimme pro Set enthalten
                  sein sollen (bspw. Orchestermusik: 8 Erste Violinen, 6 Zweite Violinen, etc.).
                </p>
                <p>
                  Bitte beachten Sie, dass wir Instrumentalstimmen, die später in ein Heft eingelegt
                  werden, am rechten Rand 3–5 mm kleiner schneiden, damit diese nicht überstehen.
                </p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class=" col-md-6">
                <p class="">
                <p class="thick inline"> Stimme benennen </p>(bspw. »Violine 1«)
                </p>
                <input type="string" class=" p-3" placeholder="Stimmenname eingeben ..." v-model="voiceName"
                  style="    width: 250px;border-width: 1px; border-radius:5px; border-style: solid; border-color: black; margin-top: 20px;">
              </div>
              <div class="col">
                <div class="">
                  <div class="col">
                    <p>Seitenanzahl Inhalt:</p>
                    <p>Exemplare pro Set:</p>
                    <p class="pt-2">Noten-PDF / Inhalt:</p>
                  </div>
                  <div class="col">
                    <p>
                      <select id="mySelect" class="custom-select selectBtn" v-model="voicePages">
                        <option selected v-bind:value="4"> 4
                        </option>
                        <option v-for="item in pages" v-bind:value="item">{{ item }}
                        </option>
                      </select>
                    </p>
                    <p>
                      <select id="mySelect" class="custom-select selectBtn" v-model="voiceQuantity">
                        <option selected v-bind:value="1"> 1
                        </option>
                        <option v-for="item in voiceAmount" v-bind:value="item">{{ item }}
                        </option>
                      </select>
                    </p>
                    <p>
                    <div v-if="pdfData3 == null" class="">
                      <div class="" v-if="pdfData3 == null">
                        <button class="btn btn uploadBtn" style="color: black !important" @click="voiceUpload"> <img
                            src="@/assets/svg/plusBlack.svg" alt="Avatar" style="margin-right: 5px;">Datei wählen
                        </button>
                        <input type="file" ref="input3" style="display: none" @change="previewImage3"
                          accept="application/pdf">
                      </div>
                    </div>
                    <div v-if="pdfData3 != null && isUpload3 == false" class="">
                      <div class="col">
                        {{ pdfData3.name }}
                      </div>
                      <div class="col">
                        <button class="btn btn uploadBtn" style="color: black !important; margin-left:5px"
                          @click="deletePdf3">
                          <img src="@/assets/svg/plusBlack.svg" alt="Avatar" style="transform: rotate(45deg);">
                        </button>
                      </div>
                    </div>
                    <div v-if="isUpload3 == true" class=" mt-3">
                      <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar"
                          :style="{ width: uploadValue3 + '%' }" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        </div>
                      </div>
                    </div>
                    </p>
                  </div>
                  <button class="btn btn uploadBtn" @click="addVoice()"
                    style="background-color: black !important; margin-right: 5px;"> <img src="@/assets/svg/iconWhite.svg"
                      alt="Avatar">
                    <p class="inline mt-1" style="color: white;">
                      Stimme
                      Hinzufügen
                    </p>
                  </button>
                  <p class="pt-4">
                    Sie können beliebig viele weitere
                    Instrumentalstimmen hinzufügen.
                  </p>
                </div>
              </div>
              <p class="hidden red-font" id="error-voice">
                Vergeben Sie der Stimme einen Namen und laden Sie eine Notendatei für die Stimme hoch, bevor
                Sie die Stimme dem Projekt hinzufügen
              </p>
            </div>
            <div class="" v-if="projectType != 1">
              <div class="col-md-12 pt-4 ">
                <h3 class="ps-2">Hinzugefügte Stimmen:</h3>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Stimmenname:</th>
                      <th>Seitenanzahl Inhalt:</th>
                      <th>Exemplare pro Set:</th>
                      <th>Datei Name:</th>
                      <th>Löschen:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <client-only>
                      <tr v-for="(voice, index) in voices">
                        <td>{{ voice.name }}</td>
                        <td>{{ voice.pages }}</td>
                        <td>{{ voice.quantity }}</td>
                        <td>{{ voice.uploadName }}</td>
                        <td>
                          <button @click.prevent="removeVoice(index)" class="btn"
                            style="background-color: transparent !important; padding: 0; margin: 0"><img
                              src="@/assets/svg/plusBlack.svg" alt="Avatar" style="transform: rotate(45deg);"></button>
                        </td>
                      </tr>
                    </client-only>
                  </tbody>
                </table>
              </div>
            </div>

            <div class=" pt-5">
              <div class=" ">
                <h2 v-if="projectType == 1">10. In den Warenkorb*</h2>
                <h2 v-if="projectType == 2">11. In den Warenkorb*</h2>
                <h2 v-if="projectType == 3">4. In den Warenkorb*</h2>
                <p>Bitte legen Sie das Projekt nun in den Warenkorb. Sie können danach noch weitere Projekte
                  anlegen und gemeinsam in einer Lieferung versandkostenoptimiert bestellen.</p>
              </div>
              <div class=" col-md">
                <button v-if="!isLoading" @click="preCheck" type="button" class="btn btn-dark mt-5">
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
          <div class=" col-lg-4 p-0 ">
            <div id="stickyBar" class="sticky-top" style="top: 120px">
              <div class=" green">
                <div class="">
                  <div class="col">
                    <p>Ihr Preis pro Exemplar:</p>
                    <h2>€ {{ priceString }}</h2>
                    <p style="font-size: x-small;">Preis inkl. 7% MwSt., ggf. zzgl. Versandkosten</p>
                  </div>
                </div>
                <div class="">
                  <div class="col">
                    <p>Ihr Preis für die gewünschte Auflagenhöhe:</p>
                    <h2>€ {{ projectPriceString }}</h2>
                    <p style="font-size: x-small;">Preis inkl. 7% MwSt., ggf. zzgl. Versandkosten</p>
                  </div>
                </div>
                <div class="">
                  <div class="col">
                    <p>Ihre Auflage:</p>
                    <div class="input-group plus-minus-input">
                      <div class="input-group-button">
                        <button @click="count(false)" type="button" class="button noborder green" data-field="quantity">
                          <img src="@/assets/svg/remove.svg" alt="Avatar">
                        </button>
                      </div>
                      <input class="input" max="300" type="number" min="0" v-model="quantitiy">
                      <div class="input-group-button">
                        <button @click="count(true)" type="button" class="button noborder green" data-quantity="plus"
                          data-field="quantity">
                          <img src="@/assets/svg/add.svg" alt="Avatar">
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <p>Produktionsdauer:</p>
                    <h2>{{ productionTime }} </h2>
                    <p style="font-size: x-small;">zzgl. Postlaufzeit</p>
                  </div>
                </div>
                <div class="">
                  <div class="col align-self-center">
                    <button v-if="!isLoading" @click="preCheck" type="button" class="btn btn-dark mt-3">
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
                <div class=" pt-4">
                  <table class="table" style="font-size:small ; border-style: hidden !important;">
                    <thead>
                      <tr>
                        <th scope="col">Auflage</th>
                        <th scope="col">Preis / Stck.</th>
                        <th scope="col">Sie sparen:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style="cursor: pointer;" :id="'discountgroup' + discount.id"
                        v-for="(discount, index) in discounts" @click="setAmount(discount.amount)">
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
                <!-- Change the `data-field` of buttons and `name` of input field's for multiple plus minus buttons-->
              </div>
              <div class=" pink" style="margin-top: 20px;">
                <h1>
                  Kostenfreier
                  Versand
                </h1>
                <img src="@/assets/svg/local_shipping.svg" alt="Avatar" style=" margin-top: 150px; width: 10%; ">
                <h1 class="mt-2">
                  Ab 50,- Euro
                  Einkaufswert
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Sektion mit 3 Karten und Bider-->
    <section class="pt-5">
      <div class="container justify-center">
        <div class="">
          <div class="col      red">
            <div class="">
              <div class="col-2"> <img src="@/assets/svg/report.svg" class="mr-2" alt="Avatar"></div>
              <div class="col">
                <h2>Maßvorgaben</h2>
              </div>
            </div>
            <p style="margin-top: 80px;">Um bestmögliche Qualität in der Druckproduktion zu gewährleisten, ist
              es notwendig, dass die
              Druckdaten korrekt angelegt sind.
              Bitte laden Sie die Maßvorgaben herunter und legen Sie Ihre Druckdaten danach an.
            </p>
            <a href=" https://firebasestorage.googleapis.com/v0/b/pocselfpublish.appspot.com/o/uploads%2FDruckdaten_Print_data_2023.pdf?alt=media&token=e8196ae8-3679-4f5a-9445-48d46724fc65"
              target="_blank">
              <button type="button" class="btn btn-dark p-2" style="width: 100%;">
                <img src="@/assets/svg/download.svg" alt="Avatar"
                  style="height: 19px; margin-right: 10px; padding-left: 5px;">
                <p class="inline mt-2">Maßvorgaben (PDF)</p>
              </button>
            </a>
          </div>
          <div class="col      yellow">
            <img src="@/assets/svg/mark_email_read.svg" class="mr-2" alt="Avatar">
            <h2 style="margin-top: 60px;">
              Sie benötigen Hilfe?
              Schreiben Sie uns!
            </h2>
            <p> Kommen Sie nicht weiter? Gerne sind wir für Sie da. Bitte schreiben Sie uns eine E-Mail:
            </p>
            <h5> fragen@capellaprint.com
            </h5>
            <p> Wir melden uns baldmöglichst bei Ihnen zurück. Gemeinsam finden wir eine Lösung!</p>
          </div>
          <div class="col-4">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
    