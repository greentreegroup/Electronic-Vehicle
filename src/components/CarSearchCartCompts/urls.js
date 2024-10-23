export const AZURE_BLOB_SAS_URL = (image) =>
  `${AZURE_STORAGE_URL}${image}?${AZURE_SAS_TOKEN}`;

export const AZURE_SAS_TOKEN = "sp=r&st=2024-09-05T17:19:32Z&se=2025-09-06T01:19:32Z&spr=https&sv=2022-11-02&sr=c&sig=6Ku5Mt6R%2Bqhd%2FNEg%2ByNjY5EvJ6dXsxvc%2FBxaaK9q59g%3D"

export const AZURE_STORAGE_URL = "https://evgreentreestorage.blob.core.windows.net/electric-vehicle-container/"

export const PA_BACKEND_CAR_URL = "https://prod-50.southeastasia.logic.azure.com:443/workflows/9dcce9324e8549508cc21adad2541b75/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8Of2Yfh0dE51cV_gUUENYIpTaCLZ8rEliY6Ai1Eb6-k"

export const PA_UNIQUE_CAR_BRANDS_URL = "https://prod-37.southeastasia.logic.azure.com:443/workflows/3ee08fe907184f1cb0d17599666897c8/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=HsSVvw0DtmlNXejqzmyeAb5xTeCnqi7MT_Iu9Z7xpuY"
