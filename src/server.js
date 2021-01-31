import { Server, Model } from "miragejs"

export function makeServer() {
  let server = new Server({

    models: {
      product: Model,
    },

    seeds(server) {
        server.create("product", {
            title: "Great Value Large White Eggs, 6 Count",
            price: 0.54,
            image: "https://i5.walmartimages.com/asr/e6d1bcd9-d514-4302-a504-ad2727c42a71_1.0284676ccd21c5445a6ed45e58dd4a89.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
        })
        server.create("product", {
          title: "Vita Coco Coconut Water Pure, 500 Ml",
          price: 2.48,
          image: "https://i5.walmartimages.com/asr/4cd6c0f9-4989-4380-8a96-4ab7a862e1ee.ef5dedd682d2673f7648126a017911b2.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
        })
        server.create("product", {
            title: "Lunchables Lunch Combinations Ham & American Cracker Stackers, 3.4 oz Package",
            price: 0.54,
            image: "https://i5.walmartimages.com/asr/99cfff92-ffeb-42ec-92c5-9de5eb7bceb2.dd6ddba2c46a51b0678dd11678bd6945.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
        })
        server.create("product", {
            title: "Beef Stew Meat Family Pack, 2.15 - 3.0 lb",
            price: 11.95,
            image: "https://i5.walmartimages.com/asr/416f235f-47b9-43b1-90a3-1fb075b8d7df_3.f9c713ff7bcfdc86b702a8ceca8a62cc.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF"
        })
    },

    routes() {
      this.namespace = "api"

      this.get("/products", (schema) => {
        return schema.products.all()
      })
    },
  })

  return server
}
