// // //* ============================================
// // //*                 (OBJECTS)
// // //* =============================================

// // //? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
// // //? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
// // //? verilerimiz icin  Object'leri kullanabiliriz.

// // //? Object'lerde Key-value (property-value) yapisi kullanilir.
// // //? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

// // console.log("*** Objects ***")

// // //? Array ile iliskili veriler
// // const cars = ["Audi", "BMW", "Anadol"]
// // const brands = ["Q8", 3.2, "Lux"]
// // const engines = [4000, 2000, 1600]
// // const speeds = [8, 7, 4]

// // console.log(cars[0], brands[0], engines[0], speeds[0])

// // //! 3 farkli yontem ile Object olusturulabilir

// // //* ---------------------------------------------------------
// // //* 1- Object literal (En cok tercih edilen yontem)
// // //* ---------------------------------------------------------

// // const arac = {
// //   marka: "Audi",
// //   model: "Q8",
// //   motor: 4000,
// //   vites: 8,
// //   colors: ["pink", "black", "gray"],
// //   power: { fosil: "Benzin", green: "Elektrik" },
// // }

// // //? Objelere erisim de 2 yontem vardir.
// // //? (.) dot notasyonu
// // console.log("**********")
// // console.log(arac.marka)
// // console.log(arac.motor)
// // console.log(arac.Model) //? undefined
// // console.log(arac.colors[2]) //? Gray
// // console.log(arac.power.green) //? Elektrik

// // //? Square bracket yontemi
// // console.log(arac["model"])
// // console.log(arac["power"]["fosil"])

// // //! bu yontem key isimlerinin degiskenlerde saklanmasına izin verdigi icin dinamik olarak obje erisimlerinde kullanılabilir.
// // // const key = prompt(
// // //   "Aracin hangi bilgisini ogrenmek istersiniz, marka, model,motor,vites ?"
// // // )

// // // console.log(arac[key])

// // arac.model = "Q3"
// // arac["power"]["fosil"] = "Mazot"
// // console.log(arac)

// // //? Uncaught TypeError: Assignment to constant variable.
// // // arac = [4, 3, 2]

// // arac.sunroof = true
// // console.log(arac.sunroof)

// // const personel = {
// //   adi : "Ahmet",
// //   soyadi : "Can",
// //   dogum: 1990,
// //   maas: 15000,
// //   ehliyet : true,
// //   diller : ["English", "German"],
// //   yasHesapla : function () {
// //     return new Date().getFullYear() - this.dogum
// //   }
// // }
// // console.log(personel.yasHesapla());

// const team = [
//   { name: "Ahmet", surname: "Can", job: "Developer", age: 30 },
//   { name: "Mary", surname: "Bary", job: "tester", age: 22 },
//   { name: "Hazel", surname: "Nut", job: "developer", age: 20 },
// ]

// // const names = team.map ((t)=>t.name)
// const names = team.map ((t)=>t.name )
// console.log(names);

// const total = team.reduce ((acc, a) => acc + a.age, 0 )
// console.log(total);


// const karma = team.map((p) => {
//   return {
//     fullname:`${p.name.toUpperCase()} ${p.surname.toUpperCase()}}`,
//     age : p.age+5
//   }
// })
// console.log(karma);


// const karma2 = team.map((p) => ({
//   fullname:`${p.name.toUpperCase()} ${p.surname.toUpperCase()}}`,
//   age : p.age+5
  
// }))

// console.log(karma2);


const passage = "There are many variations of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomised words which don't look even slightly believable."
let pUpper = passage.toUpperCase()
console.log(passage);
console.log(pUpper);

let splitted = passage.split(" ")
console.log(splitted);










