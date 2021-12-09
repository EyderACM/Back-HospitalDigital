export const hospitalFetch = (entry: any) => entry;

export const hospitalFetchStatus = (entry: any) => ({
  message: "Patient age exceds maximum",
  ...entry,
});

export const hospitalEditFetch = (entry: any) => ({
  message: "Patient not found",
  ...entry,
});

export const hospitalDeleteFetch = (entry: any) => ({
  message: "Patient was deleted",
  ...entry,
});

export const hospitalDeleteFetchStatus = (entry: any) => ({
  message: "Patient deleted not found",
  ...entry,
});
