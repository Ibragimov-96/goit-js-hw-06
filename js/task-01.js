// const categoryRef = document.querySelectorAll(".item")
// console.log(categoryRef)
// const array = [...categoryRef]
// console.log(array)
// // const categoryItemRef = categoryRef.querySelectorAll(".item")
// // console.log("Number of categories: ", categoryItemRef.length)

// const textItemRef = document.querySelectorAll('#categories h2')

// const caregoryListRef = document.querySelectorAll('#categories ul')

// console.log('Category: ', textItemRef[0].textContent)
// console.log('Elements: ', caregoryListRef[0].children.length)
// console.log('Category: ', textItemRef[1].textContent)
// console.log('Elements: ', caregoryListRef[1].children.length)
// console.log('Category: ', textItemRef[2].textContent)
// console.log('Elements: ', caregoryListRef[2].children.length)

const totalCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", totalCategories.length);

const categoriesArray = [...totalCategories].map(
    categories => `Категорія: ${categories.children[0].textContent}
Кількість елементів: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);