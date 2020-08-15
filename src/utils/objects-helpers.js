export const updateObjectInArray = (items, itemId, ojbPropName, newObjProps) => {
 return items.map(u => {
    if (u[ojbPropName] === itemId) {
      return { ...u, ...newObjProps };
    }
    return u;
  });
};
