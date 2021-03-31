const Books = [
  {
    title: "Steve Jobs",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg",
    author: "Walter Isaacson",
    url: "https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537",
  },
  {
    title: "Zero to One",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/4137OkbPQ4L._SX331_BO1,204,203,200_.jpg",
    author: "Peter Thiel, Blake Masters",
    url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
  },
  ,
  {
    title: "The Pragmatic Programmer",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg",
    author: "David Thomas, Andrew Hunt",
    url:
      "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
  },
  {
    title: "The Unicorn Project",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51A4T36jisL._SX334_BO1,204,203,200_.jpg",
    author: "Gene Kim",
    url:
      "https://www.amazon.com/Unicorn-Project-Developers-Disruption-Thriving/dp/1942788762",
  },
  {
    title: "The Passionate Programmer",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51m3yzmDFCL._SX331_BO1,204,203,200_.jpg",
    author: "Chad Fowler",
    url:
      "https://www.amazon.com/Passionate-Programmer-Remarkable-Development-Pragmatic-ebook/dp/B00AYQNR5U",
  },
  {
    title: "Hatching Twitter",
    image: "https://m.media-amazon.com/images/I/51YUkI5ZQ-L.jpg",
    author: "Nick Bilton",
    url:
      "https://www.amazon.com/Hatching-Twitter-Story-Friendship-Betrayal-ebook/dp/B00CDUVSQ0",
  },
  {
    title: "How Google Works",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/31Xc+yFta0L._SX327_BO1,204,203,200_.jpg",
    author: "Eric Schmidt, Jonathan Rosenberg",
    url: "https://www.amazon.com/How-Google-Works-Eric-Schmidt/dp/1455582328",
  },
  {
    title: "Elon Musk",
    image: "https://m.media-amazon.com/images/I/51tw6UjHpDL.jpg",
    author: "Ashlee Vance",
    url:
      "https://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future-ebook/dp/B00KVI76ZS",
  },
  {
    title: "Six Easy Pieces",
    image: "https://m.media-amazon.com/images/I/51E53HCUKVL.jpg",
    author: "Richard P. Feynman",
    url:
      "https://www.amazon.com/Six-Easy-Pieces-Essentials-Explained-ebook/dp/B004OVEYNU",
  },
  {
    title: "Sapiens",
    image: "https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg",
    author: "Yuval Noah Harari",
    url:
      "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari-ebook/dp/B00ICN066A",
  },
  {
    title: "Steve Jobs",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg",
    author: "Walter Isaacson",
    url: "https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537",
  },
  {
    title: "Zero to One",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/4137OkbPQ4L._SX331_BO1,204,203,200_.jpg",
    author: "Peter Thiel, Blake Masters",
    url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
  },
  ,
  {
    title: "The Pragmatic Programmer",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg",
    author: "David Thomas, Andrew Hunt",
    url:
      "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
  },
  {
    title: "The Unicorn Project",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51A4T36jisL._SX334_BO1,204,203,200_.jpg",
    author: "Gene Kim",
    url:
      "https://www.amazon.com/Unicorn-Project-Developers-Disruption-Thriving/dp/1942788762",
  },
  {
    title: "The Passionate Programmer",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51m3yzmDFCL._SX331_BO1,204,203,200_.jpg",
    author: "Chad Fowler",
    url:
      "https://www.amazon.com/Passionate-Programmer-Remarkable-Development-Pragmatic-ebook/dp/B00AYQNR5U",
  },
  {
    title: "Hatching Twitter",
    image: "https://m.media-amazon.com/images/I/51YUkI5ZQ-L.jpg",
    author: "Nick Bilton",
    url:
      "https://www.amazon.com/Hatching-Twitter-Story-Friendship-Betrayal-ebook/dp/B00CDUVSQ0",
  },
  {
    title: "How Google Works",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/31Xc+yFta0L._SX327_BO1,204,203,200_.jpg",
    author: "Eric Schmidt, Jonathan Rosenberg",
    url: "https://www.amazon.com/How-Google-Works-Eric-Schmidt/dp/1455582328",
  },
  {
    title: "Elon Musk",
    image: "https://m.media-amazon.com/images/I/51tw6UjHpDL.jpg",
    author: "Ashlee Vance",
    url:
      "https://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future-ebook/dp/B00KVI76ZS",
  },
  {
    title: "Six Easy Pieces",
    image: "https://m.media-amazon.com/images/I/51E53HCUKVL.jpg",
    author: "Richard P. Feynman",
    url:
      "https://www.amazon.com/Six-Easy-Pieces-Essentials-Explained-ebook/dp/B004OVEYNU",
  },
  {
    title: "Sapiens",
    image: "https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg",
    author: "Yuval Noah Harari",
    url:
      "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari-ebook/dp/B00ICN066A",
  },
  {
    title: "Steve Jobs",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41dKkez-1rL._SX326_BO1,204,203,200_.jpg",
    author: "Walter Isaacson",
    url: "https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537",
  },
  {
    title: "Zero to One",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/4137OkbPQ4L._SX331_BO1,204,203,200_.jpg",
    author: "Peter Thiel, Blake Masters",
    url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
  },
  ,
  {
    title: "The Pragmatic Programmer",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX380_BO1,204,203,200_.jpg",
    author: "David Thomas, Andrew Hunt",
    url:
      "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
  },
  {
    title: "The Unicorn Project",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51A4T36jisL._SX334_BO1,204,203,200_.jpg",
    author: "Gene Kim",
    url:
      "https://www.amazon.com/Unicorn-Project-Developers-Disruption-Thriving/dp/1942788762",
  },
  {
    title: "The Passionate Programmer",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51m3yzmDFCL._SX331_BO1,204,203,200_.jpg",
    author: "Chad Fowler",
    url:
      "https://www.amazon.com/Passionate-Programmer-Remarkable-Development-Pragmatic-ebook/dp/B00AYQNR5U",
  },
  {
    title: "Hatching Twitter",
    image: "https://m.media-amazon.com/images/I/51YUkI5ZQ-L.jpg",
    author: "Nick Bilton",
    url:
      "https://www.amazon.com/Hatching-Twitter-Story-Friendship-Betrayal-ebook/dp/B00CDUVSQ0",
  },
  {
    title: "How Google Works",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/31Xc+yFta0L._SX327_BO1,204,203,200_.jpg",
    author: "Eric Schmidt, Jonathan Rosenberg",
    url: "https://www.amazon.com/How-Google-Works-Eric-Schmidt/dp/1455582328",
  },
  {
    title: "Elon Musk",
    image: "https://m.media-amazon.com/images/I/51tw6UjHpDL.jpg",
    author: "Ashlee Vance",
    url:
      "https://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future-ebook/dp/B00KVI76ZS",
  },
  {
    title: "Six Easy Pieces",
    image: "https://m.media-amazon.com/images/I/51E53HCUKVL.jpg",
    author: "Richard P. Feynman",
    url:
      "https://www.amazon.com/Six-Easy-Pieces-Essentials-Explained-ebook/dp/B004OVEYNU",
  },
  {
    title: "Sapiens",
    image: "https://m.media-amazon.com/images/I/51Sn8PEXwcL.jpg",
    author: "Yuval Noah Harari",
    url:
      "https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari-ebook/dp/B00ICN066A",
  },
];
export default Books;
