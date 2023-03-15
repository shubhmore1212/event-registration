export const getButtonName = (role_id: number) => {
    switch (role_id) {
      case 1:
        return { name1: "BOOK NOW", name2: "SHARE" };
      case 2:
        return { name1: "UPDATE", name2: "DELETE" };
      case 3:
        return { name1: "DELETE", name2: "REGISTERED USERS" };
      default:
        return { name1: "", name2: "" };
    }
  };