export const delay = async (delay: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), delay);
  });
};
