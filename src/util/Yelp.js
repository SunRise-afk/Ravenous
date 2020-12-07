const apiKey =
  "hyRhmcu1_eGVAC8yitc4c2XkaZt1uxzSZ9XhpJg1FgbLMUlDfoaAoTQHy5qqMpq7Yo-iee4vncf4Jk4qzUqfsm0uvFQ1Aak0PC4GvHDYxojJMa3vG3hD0ZYRcAPOX3Yx";
export const Yelp = {
  search: (term, location, sortBy) => {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.address,
              city: business.city,
              state: business.state,
              zipCode: business.zipCode,
              category: business.category,
              rating: business.rating,
              reviewCount: business.reviewCount,
            };
          });
        }
      });
  },
};
