let myArray=["ahmad","osama","rami","yazan"]


// 1-(at()) الميثود بينحط فيها رقم الانديكس الي بدك ياه في الاراي و هي بترجعلك ياه
myArray.at(0)
console.log(myArray.at(2))


// 2-(concat()) ----------------------------------------------------------------------------
// تستخدم للربط بين 2 ارايز او اراي مع سترينج
let myName=["khaled","moahamd"]
let myNewArray=myArray.concat(myName)
console.log(myNewArray)


// 3-(push())  ------------------------------------------------------------------------------
//  تستخدم لاضافة عنصر الى الاراي بعد اخر عنصر موجود في هذه الاراي :ملاحظة يتغير طول الاراي بعد استخدام هذه الميثود
console.log(myArray.length)
myArray.push("anas")
console.log(myArray)
console.log(myArray.length)

// 4-(pop())----------------------------------------------------------------------------------
// تسخدم لازالة اخر عنصر في الاراي ويتحدث تغيير في طول الاراي
console.log(myArray.length)
myArray.pop()
console.log(myArray)
console.log(myArray.length)

// 5-(includes())----------------------------------------------------------------------------------------
//هاي الميثود بتوخد سترينج وبتقوم بالبحث عنه داخل الاراي اذا كان موجود بترجع ترو اذا غير موجود بترجع فولس

console.log(myArray.includes("ahmad"))
console.log(myArray.includes("hani"))
