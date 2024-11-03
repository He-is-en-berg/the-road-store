import supabase from "./supabase";

export async function getCategory() {
  const { data, error } = await supabase.from("category").select("*");

  if (error) {
    console.log(error);
    throw new Error(error.message());
  }
  return data;
}

export async function getProduct() {
  const { data, error } = await supabase.from("product").select("*");
  const categories = await getCategory();

  if (error) {
    console.log(error);
    throw new Error(error.message());
  }

  const products = data.map((prod) => {
    const categoryName = categories.find(
      (category) => category.id === prod.category_id
    ).name;
    const fullName = prod.brand + " " + prod.name;
    return { categoryName, ...prod, fullName };
  });

  return products;
}

export async function getCart() {
  const { data, error } = await supabase.from("cart").select("*");

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return data;
}

export async function insertCartItem(item) {
  const { error } = await supabase.from("cart").insert(item);

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
export async function deleteCartItem(id) {
  const response = await supabase.from("cart").delete().eq("id", id);
  return response;
}
export async function updateCartItemQuantity(id, count) {
  const { error } = await supabase
    .from("cart")
    .update({ quantity: count })
    .eq("id", id);
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

// async function createUser(id, email, name) {
//   const { error } = await supabase.from("users").insert({ id, name, email });

//   if (error) {
//     console.log(error.message);
//   }
// }
export async function signUp(name, email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) {
    alert(error.message);
  } else {
    return data;
  }
}
export async function Login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    alert(error);
    throw new Error(error.message);
  } else {
    return data;
  }
}
