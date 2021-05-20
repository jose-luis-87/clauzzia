const settings = {
  "name": "clauzziagomezweb",
  "state": {
    "frontity": {
      "url": "http://clauzzia.mandujanodesign.com",
      "title": "Clauzzia Gómez",
      "description": "Web personal de la artista visual Clauzzia Gómez"
    }
  },
  "packages": [
    {
      "name": "clauzzia-theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://clauzzia.mandujanodesign.com/wp-json",
          "postTypes":[
            {
              type: "fotografia",
              endpoint:"fotografia",
              archive:"/fotos"
            },
            {
              type: "video",
              endpoint:"video",
              archive:"/videos"
            },
            {
              type: "proyectos",
              endpoint:"proyectos",
              archive:"/proyectos"
            },
            {
              type: "testimoniales",
              endpoint:"testimoniales",
              archive:"/testimoniales"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
