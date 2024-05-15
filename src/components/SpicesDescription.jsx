import React from 'react';
import {useParams} from 'react-router-dom';
import SpiceInfo from './SpiceInfo';

const SpicesDescription = () => {
  const {id} = useParams();

  // Define spiceData directly in this component
  const spiceData = [
    {
      id: 1,
      spicePhoto: require('../images/img-01.jpg').default,
      spiceName: 'Turmeric',
      botanicalName: 'Curcuma longa',
      description:
        'Turmeric is a golden-yellow spice derived from the rhizomes of the Curcuma longa plant. It is widely used in cooking, traditional medicine, and even as a coloring agent in various industries.',
      appearance: [
        'Color: Bright yellow-orange.',
        'Form: Typically ground into a fine powder, also available as fresh rhizomes.',
      ],
      flavorandaroma: [
        'Flavor: Warm, earthy, and slightly bitter.',
        'Aroma: Mildly aromatic with hints of orange and ginger.',
      ],
      use: [
        'Culinary Uses: Essential in Indian, Southeast Asian, and Middle Eastern cuisines for curries, rice dishes, soups, and beverages like golden milk.',
        'Medicinal Purposes: Used in traditional Ayurvedic and Chinese medicine for its anti-inflammatory and antioxidant properties.',
      ],
      ingredients: [
        'Active Compounds: Contains curcuminoids, notably curcumin, which gives turmeric its vibrant color and many of its health benefits.',
        'Nutritional Content: Turmeric is rich in vitamins and minerals, including vitamin C, vitamin E, potassium, iron, manganese, and dietary fiber.',
      ],
      benefits: [
        'Anti-inflammatory Effects: Curcumin in turmeric is known for its potent anti-inflammatory properties, potentially helpful in managing inflammatory conditions.',
        'Antioxidant Power: Turmeric is a rich source of antioxidants, protecting cells from oxidative stress and supporting overall health.',
        'Digestive Aid: Traditionally used to aid digestion, relieve bloating, and support gastrointestinal health.',
      ],
      storage: [
        'Store turmeric powder in an airtight container in a cool, dark place to preserve its flavor and potency.',
        'Fresh turmeric rhizomes can be refrigerated for short-term storage or frozen for longer use.',
      ],
      p: 'Turmeric, prized for its vibrant color and therapeutic properties, has been a staple in culinary and medicinal traditions for centuries. Whether used in curries or herbal remedies, turmeric offers a range of health benefits thanks to its active compounds and nutritional content.',
      significance: [
        'Culinary Significance: Integral in curries, spice blends, marinades, and beverages across various cultures.',
        'Medicinal Significance: Valued in Ayurvedic, Traditional Chinese Medicine (TCM), and modern herbal medicine for its health-promoting properties.',
      ],
      summary:
        'Turmeric, with its warm flavor, vibrant color, and diverse benefits, stands as a versatile spice with culinary, medicinal, and cultural significance.',
    },
    {
      id: 2,
      spicePhoto: require('../images/img-02.jpg').default,

      spiceName: 'Green Cardamom',
      botanicalName: 'Elettaria cardamomum',
      description:
        'Green cardamom, botanically known as Elettaria cardamomum, is a highly aromatic spice known for its warm, slightly citrusy flavor profile. It comes from the seeds of plants belonging to the Zingiberaceae family and is widely used in culinary and medicinal applications.',
      appearance: [
        'Color: Pale green to deep green pods with small, black seeds inside.',
        'Texture: Pods are thin and papery, containing several small seeds.',
      ],
      flavorandaroma: [
        'Flavor: Sweet, floral, and spicy with hints of citrus and mint.',
        'Aroma: Intensely aromatic with a refreshing, slightly mentholated fragrance.',
      ],
      use: [
        'Culinary Uses: Essential in Indian, Middle Eastern, and Scandinavian cuisines for savory dishes, desserts, beverages like chai tea, and spice blends like garam masala.',
        'Medicinal Purposes: Used in traditional medicine for digestive issues, respiratory problems, and as a natural remedy for bad breath.',
      ],
      ingredients: [
        'Active Compounds: Contains volatile oils like cineole, terpinene, terpineol, and others responsible for its flavor and medicinal properties.',
        'Nutritional Content: Rich in minerals like potassium, calcium, and magnesium, as well as vitamins such as vitamin C and vitamin A.',
      ],
      benefits: [
        'Digestive Aid: Green cardamom is known for its carminative properties, helping to relieve indigestion, gas, and bloating.',
        'Respiratory Support: Traditionally used to alleviate coughs, congestion, and respiratory discomfort.',
        'Antioxidant Properties: Contains antioxidants that may contribute to overall health and wellness.',
      ],
      storage: [
        'Store green cardamom pods or seeds in an airtight container in a cool, dry place away from sunlight and moisture.',
        'Ground cardamom should be stored similarly and used within a few months for optimal flavor.',
      ],
      p: 'Green cardamom, with its unique flavor and versatile uses, has been a prized spice for centuries across various cultures. Whether enhancing the taste of dishes or providing natural remedies, its aromatic seeds are treasured in kitchens and apothecaries alike.',
      significance: [
        'Culinary Significance: Integral in spice blends, desserts, teas, and savory dishes worldwide, adding complexity and aroma.',
        'Cultural Significance: Used in cultural rituals, Ayurvedic practices, and traditional medicine systems for centuries.',
      ],
      summary:
        'Green cardamom, with its sweet-spicy flavor, delightful aroma, and potential health benefits, remains a staple spice cherished in global cuisines and holistic wellness traditions.',
    },
    {
      id: 3,
      spicePhoto: require('../images/img-03.jpg').default,
      spiceName: 'Mace',
      botanicalName: 'Myristica fragrans',
      description:
        'Mace is a spice derived from the reddish seed covering of the nutmeg seed, botanically known as Myristica fragrans. It is valued for its warm, aromatic flavor profile and is commonly used in both sweet and savory dishes.',
      appearance: [
        'Color: Ranges from light orange to deep red, with a slightly translucent quality.',
        'Form: Usually found in dried, blade-like strips or ground into a fine powder.',
      ],
      flavorandaroma: [
        'Flavor: Warm, sweet, and slightly peppery with subtle notes of citrus and cinnamon.',
        'Aroma: Aromatic and fragrant, reminiscent of a combination of nutmeg, cinnamon, and cloves.',
      ],
      use: [
        'Culinary Uses: Adds depth of flavor to baked goods, desserts, sauces, soups, and meat dishes.',
        'Spice Blends: Essential in spice blends like garam masala, curry powders, and pumpkin pie spice.',
        'Medicinal Purposes: Used in traditional medicine for digestive health and as a natural remedy for toothaches.',
      ],
      ingredients: [
        'Active Compounds: Contains compounds like myristicin, elemicin, and eugenol, which contribute to its flavor and potential health benefits.',
        'Nutritional Content: Mace offers trace minerals like calcium, iron, and manganese, along with essential oils.',
      ],
      benefits: [
        'Digestive Aid: Mace is believed to aid digestion, relieve nausea, and reduce stomach discomfort.',
        'Oral Health: Traditionally used as a natural remedy for toothaches and oral infections due to its antimicrobial properties.',
        'Antioxidant Properties: Contains antioxidants that may help protect cells from oxidative damage.',
      ],
      storage: [
        'Store whole mace blades or ground mace in an airtight container in a cool, dark place away from heat and moisture.',
        'Ground mace should be used within six months to maintain its potency and flavor.',
      ],
      p: 'Mace, with its warm and fragrant qualities, is a versatile spice used in various cuisines and traditional remedies. Whether enhancing the flavor of dishes or offering potential health benefits, mace continues to be cherished in culinary and medicinal practices.',
      significance: [
        'Culinary Significance: Adds complexity and aroma to dishes, particularly in desserts, curries, and spice blends.',
        'Historical Significance: Mace has a long history of use in ancient cultures for culinary, medicinal, and ceremonial purposes.',
      ],
      summary:
        'Mace, with its unique flavor profile and potential health benefits, remains a valuable spice in kitchens and apothecaries worldwide.',
    },
    {
      id: 4,
      spicePhoto: require('../images/img-04.jpg').default,

      spiceName: 'Star Anise',
      botanicalName: 'Illicium verum',
      description:
        'Star anise is a star-shaped spice derived from the fruit of the Illicium verum tree. It is known for its licorice-like flavor profile and is widely used in culinary dishes, beverages, and traditional medicine.',
      appearance: [
        'Shape: Star-shaped with 8-10 pointed, dark brown pods radiating from a central stem.',
        'Color: Dark brown with a glossy exterior.',
      ],
      flavorandaroma: [
        'Flavor: Sweet, warm, and licorice-like with hints of clove and nutmeg.',
        'Aroma: Aromatic, spicy, and slightly floral with a strong licorice fragrance.',
      ],
      use: [
        'Culinary Uses: Commonly used in Asian cuisines, especially in savory dishes, soups, marinades, and spice blends like Chinese five-spice powder.',
        'Beverages: Adds flavor to teas, mulled wines, and infused syrups.',
        'Medicinal Purposes: Used in traditional medicine for its potential digestive and respiratory health benefits.',
      ],
      ingredients: [
        'Active Compounds: Contains compounds like anethole, eugenol, and linalool, contributing to its flavor and potential health properties.',
        'Mineral Content: Star anise provides trace minerals like iron, manganese, copper, and calcium.',
      ],
      benefits: [
        'Digestive Aid: Star anise is believed to aid digestion, alleviate bloating, and soothe gastrointestinal discomfort.',
        'Respiratory Support: Traditionally used to relieve coughs, colds, and respiratory congestion.',
        'Antioxidant Properties: Contains antioxidants that may help protect against oxidative stress.',
      ],
      storage: [
        'Store whole star anise pods in an airtight container in a cool, dry place away from sunlight.',
        'Ground star anise should be used within six months to maintain its flavor and aroma.',
      ],
      p: 'Star anise, with its unique star-shaped appearance and distinctive flavor, plays a crucial role in various culinary creations and traditional remedies. Whether enhancing the taste of savory dishes or providing potential health benefits, star anise remains a valuable spice in global cuisines.',
      significance: [
        'Culinary Significance: Essential in Asian cuisines, spice blends, desserts, and beverages.',
        'Medicinal Significance: Valued in traditional medicine systems for digestive and respiratory health.',
      ],
      summary:
        'Star anise, with its sweet and aromatic profile, continues to be a popular spice known for both its culinary versatility and potential therapeutic uses.',
    },
    {
      id: 5,
      spicePhoto: require('../images/img-05.jpg').default,
      spiceName: 'Black Cardamom',
      botanicalName: 'Amomum subulatum',
      description:
        "Black cardamom, also known as 'hill cardamom,' is a robust spice derived from the dried fruit pods of the Amomum subulatum plant. It offers a smoky, earthy flavor profile distinct from green cardamom and is commonly used in savory dishes.",
      appearance: [
        'Size: Larger and darker than green cardamom pods.',
        'Color: Dark brown to black with a wrinkled appearance.',
      ],
      flavorandaroma: [
        'Flavor: Smoky, resinous, and slightly bitter with hints of camphor and eucalyptus.',
        'Aroma: Strong, aromatic, and herbal with smoky undertones.',
      ],
      use: [
        'Culinary Uses: Integral in Indian, Tibetan, and Chinese cuisines for savory dishes like curries, stews, rice, and meat preparations.',
        'Spice Blends: Found in spice mixes like garam masala and various masalas for depth of flavor.',
        'Medicinal Purposes: Used in traditional Ayurvedic and Chinese medicine for digestive and respiratory health.',
      ],
      ingredients: [
        'Active Compounds: Contains essential oils like cineol, terpineol, and sabinene, contributing to its unique flavor and potential health benefits.',
        'Mineral Content: Black cardamom provides minerals like calcium, phosphorus, and magnesium.',
      ],
      benefits: [
        'Digestive Aid: Black cardamom is known for its carminative properties, aiding digestion and relieving flatulence.',
        'Respiratory Support: Used traditionally to alleviate respiratory issues like coughs, asthma, and bronchitis.',
        'Antioxidant Properties: Contains antioxidants that may contribute to overall health and wellness.',
      ],
      storage: [
        'Store whole black cardamom pods in an airtight container in a cool, dry place away from sunlight.',
        'Ground black cardamom should be used promptly to retain its potency and flavor.',
      ],
      p: 'Black cardamom, prized for its smoky flavor and robust aroma, is a key ingredient in many savory dishes, spice blends, and traditional remedies. Whether enhancing the taste of curries or providing potential health benefits, black cardamom remains a valued spice in culinary and medicinal practices.',
      significance: [
        'Culinary Significance: Essential in spice blends, meat dishes, curries, and stews in South Asian and Tibetan cuisines.',
        'Medicinal Significance: Valued in Ayurvedic and Chinese medicine for its digestive and respiratory benefits.',
      ],
      summary:
        'Black cardamom, with its unique smoky flavor and medicinal properties, adds depth and complexity to a range of dishes while offering potential health benefits.',
    },
    {
      id: 6,
      spicePhoto: require('../images/img-06.jpg').default,
      spiceName: 'Cinnamon',
      botanicalName:
        'Cinnamomum verum (Ceylon cinnamon) or Cinnamomum cassia (Cassia cinnamon)',
      description:
        'Cinnamon is a highly aromatic spice derived from the inner bark of trees belonging to the Cinnamomum genus. It is prized for its sweet and warm flavor profile, making it a versatile ingredient in various cuisines and applications.',
      appearance: [
        'Cinnamon Sticks: Long, rolled-up strips of bark with a reddish-brown color and a woody texture.',
        'Ground Cinnamon: Fine powder with a rich brown color and a strong aromatic scent.',
      ],
      flavorandaroma: [
        'Flavor: Sweet, warm, and slightly spicy with subtle hints of citrus and floral notes.',
        'Aroma: Rich, fragrant, and inviting, adding depth to both sweet and savory dishes.',
      ],
      use: [
        'Cooking: Used in baking, desserts, curries, stews, and beverages like chai tea and mulled cider.',
        'Spice Blends: Essential in blends like pumpkin spice, garam masala, and various Middle Eastern spice mixes.',
        'Medicinal Purposes: Traditional use in herbal remedies for its potential anti-inflammatory and digestive properties.',
      ],
      ingredients: [
        'Flavor Enhancement: Cinnamon adds warmth and depth to dishes, enhancing the overall flavor profile.',
        'Aromatic Qualities: Its rich aroma contributes to the sensory experience of foods and beverages.',
        'Nutritional Content: Cinnamon contains small amounts of minerals like calcium, iron, and manganese, as well as trace amounts of vitamins such as vitamin K.',
      ],
      benefits: [
        'Antioxidant Properties: Contains antioxidants that may help reduce oxidative stress and promote overall health.',
        'Blood Sugar Regulation: Some studies suggest cinnamon may aid in regulating blood sugar levels.',
        'Anti-inflammatory: May have anti-inflammatory effects, benefiting heart health and overall well-being.',
      ],
      storage: [
        'Store cinnamon sticks or ground cinnamon in airtight containers away from light and moisture to preserve flavor and aroma.',
        'Ground cinnamon should be used within 6 months to a year for optimal freshness.',
      ],
      p: 'Cinnamon, with its sweet and warm flavor, is a versatile spice used globally in both sweet and savory dishes. It holds cultural significance in various cuisines and traditional medicine practices.',
      significance: [
        'Culinary Uses: Found in desserts, beverages, savory dishes, and spice blends worldwide.',
        'Traditional Medicine: Used in Ayurveda and other herbal traditions for its potential health benefits.',
      ],
      summary:
        "Cinnamon's sweet and aromatic qualities make it a beloved spice in kitchens around the world, adding depth to dishes and offering potential health benefits.",
    },
    {
      id: 7,
      spicePhoto: require('../images/img-07.jpg').default,
      spiceName: 'Black Pepper',
      botanicalName: 'Piper nigrum',
      description:
        'Black pepper is a versatile and widely used spice derived from the dried berries of the Piper nigrum vine. Known for its pungent flavor and distinct aroma, black pepper is a staple in global cuisines and culinary traditions.',
      appearance: [
        'Whole Black Peppercorns: Small, round, and wrinkled berries with a dark brown to black color.',
        'Ground Black Pepper: Fine powder with a deep black color and a strong, pungent aroma.',
      ],
      flavorandaroma: [
        'Flavor: Sharp, pungent, and mildly spicy with earthy and citrusy undertones.',
        'Aroma: Aromatic, peppery, and slightly floral, enhancing the overall flavor of dishes.',
      ],
      use: [
        'Cooking: Used in marinades, rubs, sauces, soups, stews, and a wide range of savory dishes.',
        'Table Spice: Commonly used as a tabletop seasoning for enhancing the flavor of cooked meals.',
        'Preservation: Historically used as a preservative for food due to its antimicrobial properties.',
      ],
      ingredients: [
        'Flavor Enhancer: Black pepper adds depth and complexity to dishes, balancing flavors.',
        'Aromatic Qualities: Its strong aroma contributes to the overall sensory experience of foods.',
        'Nutritional Content: Contains small amounts of minerals like manganese, iron, and calcium, as well as trace elements of vitamins such as vitamin K.',
      ],
      benefits: [
        'Antioxidant Properties: Contains piperine, a compound with potential antioxidant benefits.',
        'Digestive Aid: Traditionally used to stimulate digestion and alleviate gastrointestinal discomfort.',
        'Anti-inflammatory Effects: May have anti-inflammatory properties, supporting overall health.',
      ],
      storage: [
        'Store whole black peppercorns in airtight containers away from light and moisture.',
        'Ground black pepper retains its flavor best when stored in airtight containers away from heat.',
      ],
      p: 'Black pepper, with its sharp and pungent flavor, is a versatile spice used worldwide in both culinary and medicinal applications. It has historical significance as a valuable trade commodity and is valued for its flavor-enhancing and potential health-promoting properties.',
      significance: [
        'Culinary Uses: Found in dishes across cuisines globally, from Indian curries to Italian pastas.',
        'Medicinal Uses: Used in traditional medicine for its digestive and anti-inflammatory benefits.',
      ],
      summary:
        "Black pepper's bold flavor and aromatic qualities make it an essential spice in kitchens worldwide, adding depth to savory dishes and offering potential health benefits.",
    },
    {
      id: 8,
      spicePhoto: require('../images/img-08.jpg').default,
      spiceName: 'Cumin',
      botanicalName: 'Cuminum cyminum',
      description:
        'Cumin is a highly aromatic spice derived from the seeds of the Cuminum cyminum plant. Known for its warm, earthy flavor and distinctive aroma, cumin is a popular ingredient in cuisines worldwide, especially in Indian, Middle Eastern, and Mexican dishes.',
      appearance: [
        'Whole Cumin Seeds: Small, elongated seeds with a ridged surface and a brownish color.',
        'Ground Cumin: Fine powder with a rich brown color and a strong, nutty aroma.',
      ],
      flavorandaroma: [
        'Flavor: Warm, earthy, and slightly nutty with hints of citrus and a mild spicy kick.',
        'Aroma: Aromatic, nutty, and slightly peppery, enhancing the overall flavor of dishes.',
      ],
      use: [
        'Cooking: Used in spice blends, curries, stews, soups, rice dishes, and roasted meats.',
        'Tempering: Essential in Indian cuisine for tempering oils to release aromatic compounds.',
        'Baking: Adds depth to bread, pastries, and savory baked goods.',
      ],
      ingredients: [
        'Flavor Enhancer: Cumin enriches dishes with its warm and nutty flavor, balancing other spices.',
        'Aromatic Qualities: Its strong aroma enhances the overall sensory experience of foods.',
        'Nutritional Content: Contains minerals such as iron, magnesium, and calcium, along with vitamins like vitamin C and vitamin E in trace amounts.',
      ],
      benefits: [
        'Digestive Aid: Traditionally used to aid digestion, reduce bloating, and alleviate stomach discomfort.',
        'Antioxidant Properties: Contains antioxidants that may help combat oxidative stress and promote overall health.',
        'Anti-inflammatory Effects: Some studies suggest cumin may have anti-inflammatory properties.',
      ],
      storage: [
        'Store whole cumin seeds in airtight containers away from light and moisture.',
        'Ground cumin retains its flavor best when stored in airtight containers in a cool, dark place.',
      ],
      p: 'Cumin, with its warm and earthy flavor, is a versatile spice that plays a crucial role in various cuisines around the world. Its aromatic qualities and potential health benefits make it a staple in both culinary and traditional medicine practices.',
      significance: [
        'Culinary Uses: Integral in dishes from Indian curries and Mexican chili to Middle Eastern rice and meat dishes.',
        'Medicinal Uses: Used in traditional medicine for digestive issues, respiratory ailments, and as an antioxidant.',
      ],
      summary:
        "Cumin's warm and nutty flavor, coupled with its health-promoting properties, makes it a valued spice in global kitchens and herbal remedies.",
    },
    {
      id: 9,
      spicePhoto: require('../images/img-09.jpg').default,
      spiceName: 'Clove',
      botanicalName: 'Syzygium aromaticum',
      description:
        'Clove is a highly aromatic spice derived from the flower buds of the Syzygium aromaticum tree, known for its warm, sweet, and slightly bitter flavor profile. It has been used for centuries in cooking, medicine, and as a fragrant spice.',
      appearance: [
        'Whole Cloves: Small, dark brown, nail-shaped flower buds.',
        'Ground Clove: Fine powder with a rich brown color and a strong, aromatic scent.',
      ],
      flavorandaroma: [
        'Flavor: Warm, sweet, and slightly bitter with hints of peppery notes.',
        'Aroma: Strong, aromatic, and slightly fruity, adding depth to dishes.',
      ],
      use: [
        'Cooking: Used in both sweet and savory dishes, including desserts, curries, meats, and beverages like mulled wine.',
        'Baking: Essential in spice blends like pumpkin spice and gingerbread, as well as in cakes, cookies, and bread.',
        'Medicinal Purposes: Historically used in traditional medicine for its potential analgesic, antimicrobial, and digestive properties.',
      ],
      ingredients: [
        'Flavor Enhancer: Cloves add warmth and complexity to dishes, enhancing their overall taste profile.',
        'Aromatic Qualities: Its intense aroma contributes to the sensory experience of foods and beverages.',
        'Nutritional Content: Contains minerals like manganese, calcium, and magnesium, along with vitamins like vitamin K and vitamin C in trace amounts.',
      ],
      benefits: [
        'Antioxidant Properties: Contains compounds like eugenol with potential antioxidant benefits.',
        'Dental Health: Traditionally used for oral health due to its antibacterial properties.',
        'Digestive Aid: May help with digestive issues and alleviate bloating.',
      ],
      storage: [
        'Store whole cloves in airtight containers in a cool, dark place away from moisture.',
        'Ground cloves should be used within 6 months to maintain optimal flavor.',
      ],
      p: 'Clove, with its warm and sweet flavor, is a versatile spice used in various culinary traditions worldwide. It not only enhances the taste and aroma of dishes but also offers potential health benefits, making it a valuable addition to kitchens and herbal remedies.',
      significance: [
        'Culinary Uses: Found in dishes from Asian cuisines to European desserts and beverages.',
        'Medicinal Uses: Used historically in traditional medicine for its analgesic and digestive properties.',
      ],
      summary:
        "Clove's distinct flavor and aromatic qualities make it a cherished spice in global cuisines and herbal remedies, enriching dishes and potentially offering health-supporting properties.",
    },

    {
      id: 10,
      spicePhoto: require('../images/img-10.jpg').default,
      spiceName: 'Nutmeg',
      botanicalName: 'Myristica fragrans',
      description:
        'Nutmeg is a warm and aromatic spice derived from the seed of the Myristica fragrans tree. It is known for its sweet and nutty flavor profile, often used in both sweet and savory dishes to add depth and warmth.',
      appearance: [
        'Whole Nutmeg: Small, egg-shaped seeds with a dark brown outer shell.',
        'Ground Nutmeg: Fine powder with a rich brown color and a strong, aromatic scent.',
      ],
      flavorandaroma: [
        'Flavor: Sweet, nutty, and slightly spicy with warm undertones.',
        'Aroma: Aromatic, rich, and comforting, adding depth to dishes.',
      ],
      use: [
        'Cooking: Used in baking, desserts, sauces, soups, stews, and spice blends like pumpkin pie spice.',
        'Beverages: Adds flavor to eggnog, mulled wine, chai tea, and hot chocolate.',
        'Medicinal Purposes: Historically used for its potential digestive and anti-inflammatory properties.',
      ],
      ingredients: [
        'Flavor Enhancer: Nutmeg enriches dishes with its sweet and nutty flavor, balancing other spices.',
        'Aromatic Qualities: Its rich aroma enhances the overall sensory experience of foods and beverages.',
        'Nutritional Content: Contains minerals like manganese, copper, and iron, along with trace amounts of vitamins like vitamin A and vitamin C.',
      ],
      benefits: [
        'Digestive Aid: Traditionally used to aid digestion and alleviate gastrointestinal discomfort.',
        'Anti-inflammatory Effects: Contains compounds that may have mild anti-inflammatory properties.',
        'Mood Enhancement: Nutmeg is believed to have mood-lifting properties when used in moderation.',
      ],
      storage: [
        'Store whole nutmeg seeds in airtight containers in a cool, dark place away from moisture.',
        'Ground nutmeg should be used within 6 months to maintain optimal flavor.',
      ],
      p: 'Nutmeg, with its sweet and nutty flavor, is a versatile spice used in a wide range of culinary applications. It not only enhances the taste and aroma of dishes but also offers potential digestive benefits and mild mood-enhancing properties.',
      significance: [
        'Culinary Uses: Found in sweet and savory dishes worldwide, from baked goods to savory sauces.',
        'Medicinal Uses: Used historically in traditional medicine for digestive issues and as a mild pain reliever.',
      ],
      summary:
        "Nutmeg's delightful flavor and aroma make it a beloved spice in kitchens globally. Its potential health benefits and culinary versatility ensure its continued significance in cooking and traditional medicine.",
    },
    {
      id: 11,
      spicePhoto: require('../images/img-11.jpg').default,
      spiceName: 'Carom Seeds (Ajwain)',
      botanicalName: 'Trachyspermum ammi',
      description:
        'Carom seeds, also known as Ajwain, are derived from the seeds of the Trachyspermum ammi plant. They have a strong, pungent aroma and a slightly bitter taste, often used in culinary and medicinal applications.',
      appearance: [
        'Small oval-shaped seeds with a ridged texture and light brown to olive green color.',
      ],
      flavorandaroma: [
        'Flavor: Pungent, sharp, and slightly bitter with a hint of thyme-like flavor.',
        'Aroma: Strong, aromatic, and reminiscent of thyme and cumin.',
      ],
      use: [
        'Cooking: Commonly used in Indian, Middle Eastern, and North African cuisines, especially in bread, savory snacks, curries, and lentil dishes.',
        'Medicinal Purposes: Known for its digestive properties and used in herbal remedies for indigestion, bloating, and gas.',
        'Tempering: Often added to hot oil or ghee in Indian cooking for flavoring.',
      ],
      ingredients: [
        'Flavor Enhancer: Ajwain adds a distinct flavor profile to dishes, enhancing their taste.',
        'Digestive Aid: Known for its carminative properties, aiding in digestion and reducing gas.',
        'Nutritional Content: Contains minerals like calcium, phosphorus, and iron, along with essential oils.',
      ],
      benefits: [
        'Digestive Health: Traditionally used to alleviate indigestion, bloating, and flatulence.',
        'Respiratory Benefits: Some cultures use ajwain for respiratory issues like asthma and bronchitis due to its expectorant properties.',
        'Antimicrobial: Contains compounds with potential antimicrobial and antifungal effects.',
      ],
      storage: [
        'Store ajwain seeds in an airtight container in a cool, dry place away from sunlight.',
        'Ground ajwain should be used within a few months for optimal flavor and potency.',
      ],
      p: 'Carom seeds, with their distinctive flavor and digestive benefits, are an integral part of cuisines and herbal remedies across various cultures. Their aromatic qualities and potential health advantages make them a valuable addition to culinary and wellness practices.',
      significance: [
        'Culinary Uses: Found in bread, snacks, curries, pickles, and spice blends in Indian, Middle Eastern, and North African cuisines.',
        'Medicinal Uses: Used in traditional medicine for digestive issues, respiratory ailments, and as a flavoring agent.',
      ],
      summary:
        'Carom seeds (Ajwain) contribute a unique flavor and offer digestive and potential medicinal benefits, making them a versatile and valued spice in culinary and herbal traditions.',
    },
    {
      id: 12,
      spicePhoto: require('../images/img-12.jpg').default,
      spiceName: 'Dry Ginger',
      botanicalName: 'Zingiber officinale',
      description:
        'Dry ginger, derived from the rhizome of the Zingiber officinale plant, is a warm and aromatic spice with a distinctive flavor profile. It is widely used in culinary preparations, herbal remedies, and beverages.',
      appearance: [
        'Dried ginger is typically available in two forms: whole dried ginger rhizomes and ground ginger powder.',
        'Whole Dried Ginger: Light brown, fibrous rhizomes with a wrinkled texture.',
        'Ground Ginger Powder: Fine, beige-colored powder with a strong aromatic scent.',
      ],
      flavorandaroma: [
        'Flavor: Warm, spicy, and slightly sweet with citrusy undertones.',
        'Aroma: Aromatic, pungent, and earthy, enhancing the overall flavor of dishes.',
      ],
      use: [
        'Cooking: Used in sweet and savory dishes, marinades, curries, soups, baked goods, and beverages like chai tea.',
        'Medicinal Purposes: Known for its anti-inflammatory, digestive, and antioxidant properties in herbal remedies.',
        'Beverages: Adds flavor and warmth to teas, herbal infusions, and spiced drinks.',
      ],
      ingredients: [
        'Flavor Enhancer: Dry ginger adds depth and warmth to dishes, balancing flavors.',
        'Aromatic Qualities: Its rich aroma contributes to the overall sensory experience of foods and beverages.',
        'Nutritional Content: Contains minerals like potassium, manganese, and magnesium, along with vitamins like vitamin C and vitamin B6.',
      ],
      benefits: [
        'Digestive Aid: Traditionally used to aid digestion, alleviate nausea, and reduce gastrointestinal discomfort.',
        'Anti-inflammatory Effects: Contains gingerol compounds known for their anti-inflammatory properties.',
        'Antioxidant Properties: Rich in antioxidants that help combat oxidative stress and promote overall well-being.',
      ],
      storage: [
        'Store whole dried ginger rhizomes in a cool, dry place away from moisture.',
        'Ground ginger powder should be stored in airtight containers away from heat and light.',
      ],
      p: 'Dry ginger, with its warm and spicy flavor, is a versatile spice used in various culinary and medicinal applications. Its aromatic qualities, digestive benefits, and potential health-promoting properties make it a valuable addition to kitchens and herbal remedies.',
      significance: [
        'Culinary Uses: Found in dishes globally, from Asian stir-fries and curries to baked goods and beverages.',
        'Medicinal Uses: Used in traditional medicine for digestive issues, cold and flu relief, and anti-inflammatory purposes.',
      ],
      summary:
        "Dry ginger's distinct flavor, aroma, and health benefits make it a cherished spice in culinary creations and herbal remedies, offering warmth, depth, and potential wellness advantages.",
    },
    {
      id: 13,
      spicePhoto: require('../images/img-13.jpg').default,
      spiceName: 'Red Dried Chili',
      botanicalName: 'Capsicum annum',
      description:
        'Red dried chili, derived from the Capsicum annum plant, is a staple spice known for its vibrant color, heat, and rich flavor. It is widely used in cuisines worldwide to add spice and depth to dishes.',
      appearance: [
        'Size and Shape :Dried red chilies come in various sizes and shapes, ranging from small and slender to larger, rounder pods.',
        ' Color:Color ranges from bright red to deep crimson, depending on the variety and drying process.',
      ],
      flavorandaroma: [
        'Flavor: Spicy, pungent, and intense heat with earthy and fruity undertones.',
        'Aroma: Aromatic, peppery, and slightly smoky, enhancing the overall flavor profile of dishes.',
      ],
      use: [
        'Cooking: Essential in spice blends, sauces, marinades, curries, stews, and salsas across cuisines.',
        'Preservation: Used historically for drying and preserving chilies, enhancing their flavor.',
        'Table Spice: Crushed red pepper flakes are popular as a table seasoning.',
      ],
      ingredients: [
        'Flavor Enhancer: Red dried chili adds heat and depth to dishes, enhancing their overall taste.',
        'Aromatic Qualities: Its smoky aroma contributes to the sensory experience of foods.',
        'Nutritional Content: Contains vitamins like vitamin C and vitamin A, along with capsaicin, a compound known for its health benefits.',
      ],
      benefits: [
        'Metabolism Boost: Capsaicin in red chilies may increase metabolism and promote weight management.',
        'Pain Relief: Topical capsaicin creams are used for pain relief, especially in arthritis.',
        'Antioxidant Properties: Red chilies are rich in antioxidants, supporting overall health.',
      ],
      storage: [
        'Store dried red chilies in airtight containers in a cool, dry place away from sunlight.',
        'Crushed red pepper flakes can be stored in spice shakers or airtight jars for convenience.',
      ],
      p: 'Red dried chili, with its fiery heat and complex flavor profile, is a versatile spice used in cuisines globally. Its culinary significance extends to preservation techniques and table seasoning, while its capsaicin content offers potential health benefits.',
      significance: [
        'Culinary Uses: Found in dishes from spicy Asian stir-fries to Mexican salsas and Italian pasta sauces.',
        'Health Benefits: Used in traditional medicine for its metabolism-boosting and pain-relieving properties.',
      ],
      summary:
        "Red dried chili's spicy kick, vibrant color, and potential health advantages make it a cherished spice in kitchens and traditional remedies, adding depth, heat, and flavor to a wide range of dishes.",
    },
    {
      id: 14,
      spicePhoto: require('../images/img-14.jpg').default,
      spiceName: 'Red Chili Flakes',
      botanicalName: 'Capsicum annum',
      description:
        'Red chili flakes, also known as crushed red pepper flakes, are made from dried and crushed red chili peppers of the Capsicum annum plant. They are valued for their spicy kick, versatility, and ability to add heat to various dishes.',
      appearance: [
        'Shape:Small, irregularly shaped flakes with varying degrees of red color intensity.',
      ],
      flavorandaroma: [
        'Flavor: Spicy, pungent, and intense heat with smoky and fruity undertones.',
        'Aroma: Aromatic, peppery, and slightly smoky, enhancing the overall flavor profile of dishes.',
      ],
      use: [
        'Cooking: Sprinkled on pizzas, pasta, salads, soups, stews, meats, and vegetables for added heat and flavor.',
        'Table Spice: Popular as a condiment and table seasoning for individuals to adjust spiciness according to preference.',
        'Marinades and Dressings: Used in marinades, dressings, and sauces for a spicy kick.',
      ],
      ingredients: [
        'Flavor Enhancer: Red chili flakes add heat and depth to dishes, enhancing their overall taste.',
        'Aromatic Qualities: Their smoky aroma contributes to the sensory experience of foods.',
        'Nutritional Content: Contains vitamins like vitamin C and vitamin A, along with capsaicin, a compound known for its health benefits.',
      ],
      benefits: [
        'Metabolism Boost: Capsaicin in red chili flakes may increase metabolism and promote weight management.',
        'Anti-inflammatory Properties: Capsaicin is known for its potential anti-inflammatory effects.',
        'Antioxidant Content: Red chili flakes are rich in antioxidants, supporting overall health.',
      ],
      storage: [
        'Store red chili flakes in airtight containers in a cool, dry place away from sunlight and moisture.',
        'Use within a few months for optimal flavor and spiciness.',
      ],
      p: 'Red chili flakes, with their fiery heat and versatile use, are a popular spice condiment used in various cuisines globally. Their distinct flavor profile and potential health benefits, attributed to capsaicin content, make them a favorite among spice enthusiasts and chefs alike.',
      significance: [
        'Culinary Uses: Found in dishes ranging from Italian pizzas and pastas to Mexican tacos and Asian stir-fries.',
        'Health Benefits: Capsaicin in chili flakes is associated with metabolism-boosting and anti-inflammatory properties.',
      ],
      summary:
        'Red chili flakes, with their spicy punch and smoky undertones, are a must-have spice for adding heat and flavor to dishes. Beyond their culinary appeal, they offer potential health benefits, making them a valuable addition to a well-rounded spice collection.',
    },
    {
      id: 15,
      spicePhoto: require('../images/img-15.jpg').default,
      spiceName: 'Long Pepper',
      botanicalName: 'Piper longum',
      description:
        'Long pepper, botanically known as Piper longum, is a flowering vine native to India and Southeast Asia. It produces long, slender spikes of tiny fruits that give rise to its name. Long pepper has a unique flavor profile, distinct from black pepper, with warm, earthy, and slightly sweet notes.',
      appearance: [
        'Shape:Long pepper spikes are cylindrical, elongated, and segmented, resembling catkins or small cones.',
        'Texture:The fruit spikes are reddish-brown when dried, often with a wrinkled or ridged texture.',
      ],
      flavorandaroma: [
        'Flavor: Warm, pungent, and slightly sweet with hints of earthiness and mild spiciness.',
        'Aroma: Aromatic, earthy, and slightly floral, adding depth to culinary creations.',
      ],
      use: [
        'Culinary Uses: Commonly used in Indian, Southeast Asian, and Middle Eastern cuisines.',
        'Spice Blends: Included in traditional spice blends like Indian garam masala and Indonesian curry powders.',
        'Medicinal Purposes: Used in Ayurvedic and traditional medicine practices for its potential health benefits.',
      ],
      ingredients: [
        'Flavor Enhancer: Long pepper adds a unique warmth and depth to dishes, complementing other spices.',
        'Aromatic Qualities: Its complex aroma enhances the overall sensory experience of foods and beverages.',
        'Nutritional Content: Contains minerals like potassium, manganese, and iron, along with trace elements of vitamins like vitamin C.',
      ],
      benefits: [
        'Digestive Aid: Traditionally used to aid digestion, alleviate stomach discomfort, and stimulate appetite.',
        'Respiratory Support: Known for its potential benefits in respiratory health and soothing throat irritation.',
        'Antioxidant Properties: Contains phytonutrients with potential antioxidant and anti-inflammatory effects.',
      ],
      storage: [
        'Store whole long pepper spikes in airtight containers away from moisture, heat, and direct sunlight.',
        'Ground long pepper powder should be stored similarly and used within a few months for optimal flavor.',
      ],
      p: 'Long pepper, valued for its unique flavor and potential health benefits, has been used in culinary and medicinal practices for centuries. Its warm and slightly sweet taste, coupled with its aromatic qualities, makes it a sought-after spice in various cuisines.',
      significance: [
        'Culinary Heritage: Integral in traditional dishes across Indian, Southeast Asian, and Middle Eastern cultures.',
        'Medicinal Heritage: Used in Ayurvedic medicine and traditional healing practices for its therapeutic properties.',
      ],
      summary:
        "Long pepper's distinct flavor, aroma, and potential health benefits make it a valuable addition to spice blends and herbal remedies, enriching culinary creations and promoting wellness.",
    },
    {
      id: 16,
      spicePhoto: require('../images/img-16.jpg').default,
      spiceName: 'Nigella Seeds',
      botanicalName: 'Nigella sativa',
      description:
        'Nigella seeds, also known as black cumin or kalonji, come from the Nigella sativa plant native to Southwest Asia. These small black seeds have a slightly bitter, peppery taste with a hint of sweetness, making them a popular spice in various cuisines and herbal remedies.',
      appearance: [
        'Shapes:Tiny, angular seeds with a jet-black color and a matte finish.',
        'Texture:They are similar in appearance to sesame seeds but smaller and darker.',
      ],
      flavorandaroma: [
        'Flavor: Slightly bitter, peppery, and nutty with a subtle sweetness.',
        'Aroma: Aromatic, earthy, and slightly herbal, enhancing the overall flavor of dishes.',
      ],
      use: [
        'Culinary Uses: Commonly used in Middle Eastern, Indian, and North African cuisines, especially in bread, spice blends, curries, and pickles.',
        'Tempering: Often used in tempering hot oil or ghee to release aromatic compounds before adding to dishes.',
        'Medicinal Purposes: Valued in traditional medicine for its potential health benefits.',
      ],
      ingredients: [
        'Flavor Enhancer: Nigella seeds add a unique bitterness and nuttiness to dishes, enhancing their overall taste profile.',
        'Aromatic Qualities: Their distinct aroma contributes to the sensory experience of foods.',
        'Nutritional Content: Contains minerals like calcium, iron, and magnesium, along with essential oils and antioxidants.',
      ],
      benefits: [
        'Digestive Health: Traditionally used to aid digestion, relieve bloating, and improve gut health.',
        'Respiratory Support: Known for potential benefits in respiratory conditions due to its expectorant properties.',
        'Anti-inflammatory Effects: Contains compounds with potential anti-inflammatory and antioxidant effects.',
      ],
      storage: [
        'Store nigella seeds in airtight containers in a cool, dark place away from heat and moisture.',
        'Use within a few months for optimal flavor and potency.',
      ],
      p: 'Nigella seeds, with their unique flavor profile and potential health benefits, have been used in culinary and medicinal practices for centuries. They are valued not only for their culinary versatility but also for their therapeutic properties in promoting digestive and respiratory health.',
      significance: [
        'Culinary Significance: Integral in dishes like naan bread, pickles, curries, and spice blends across various cultures.',
        'Medicinal Significance: Used in traditional medicine for digestive issues, respiratory ailments, and overall well-being.',
      ],
      summary:
        'Nigella seeds, with their distinct flavor and aroma, offer a range of culinary possibilities and potential health benefits. Whether used in cooking or as part of herbal remedies, they contribute depth and richness to dishes while supporting wellness.',
    },
    {
      id: 17,
      spicePhoto: require('../images/img-17.jpg').default,
      spiceName: 'Bay Leaf',
      botanicalName: 'Laurus nobilis',
      description:
        'Bay leaves, derived from the aromatic Laurus nobilis tree, are dried leaves used as a culinary herb and flavoring agent. They have a distinctive aroma and flavor profile, adding depth and complexity to various dishes.',
      appearance: [
        'Fresh Bay Leaves: Oval-shaped with a glossy, dark green upper surface and a lighter underside.',
        'Dried Bay Leaves: Stiff and brittle, retaining their deep green color.',
        'Size: Typically 2-3 inches in length with a leathery texture.',
      ],
      flavorandaroma: [
        'Flavor: Subtly bitter, herbal, and slightly floral with hints of eucalyptus and mint.',
        'Aroma: Aromatic, woodsy, and slightly sweet, enhancing the overall flavor of dishes.',
      ],
      use: [
        'Culinary Uses: Commonly used in soups, stews, sauces, marinades, rice dishes, and braised meats.',
        'Infusions: Used to flavor stocks, broths, and simmering liquids, imparting a subtle herbal essence.',
        'Dried vs. Fresh: Dried bay leaves are more commonly used in cooking due to their intense flavor.',
      ],
      ingredients: [
        'Flavor Enhancer: Bay leaves add depth and complexity to dishes, enhancing their overall taste profile.',
        'Aromatic Qualities: Their distinct aroma contributes to the sensory experience of foods.',
        'Nutritional Content: Contains vitamins like vitamin A, vitamin C, and minerals like calcium and magnesium.',
      ],
      benefits: [
        'Digestive Aid: Traditionally used to aid digestion and soothe gastrointestinal discomfort.',
        'Antioxidant Properties: Contains phytonutrients with potential antioxidant and anti-inflammatory effects.',
        'Respiratory Benefits: Inhalation of bay leaf vapors may help relieve respiratory congestion.',
      ],
      storage: [
        'Store dried bay leaves in airtight containers in a cool, dark place away from heat and moisture.',
        'Replace older bay leaves every year for optimal flavor and potency.',
      ],
      p: 'Bay leaves, with their subtle yet distinct flavor and aroma, play a significant role in enhancing the taste of a wide range of dishes. Apart from their culinary uses, they also offer potential health benefits, making them a valuable addition to your spice collection.',
      significance: [
        'Culinary Significance: Found in recipes across various cuisines, including Mediterranean, Indian, and French.',
        'Traditional Uses: Used historically in herbal medicine for digestive and respiratory ailments.',
      ],
      summary:
        'Bay leaves, prized for their flavor-enhancing properties and potential health benefits, are a staple in kitchens worldwide. Whether used in hearty stews or delicate sauces, they contribute a unique essence that elevates culinary creations.',
    },
    {
      id: 18,
      spicePhoto: require('../images/img-18.jpg').default,
      spiceName: 'Fennel Seeds',
      botanicalName: 'Foeniculum vulgare',
      description:
        'Fennel seeds, derived from the Foeniculum vulgare plant, are aromatic seeds with a sweet and slightly licorice-like flavor. They are commonly used as a culinary spice and for their medicinal properties.',
      appearance: [
        'Small, elongated seeds with a ridged surface.',
        'Light greenish-brown to brown in color.',
        'Size: Typically 4-10 millimeters in length.',
        'Texture: Smooth yet slightly rough due to ridges.',
      ],
      flavorandaroma: [
        'Flavor: Sweet, aromatic, and slightly nutty with a subtle licorice undertone.',
        'Aroma: Fragrant, herbal, and reminiscent of anise or licorice.',
      ],
      use: [
        'Culinary Uses: Commonly used in baking, spice blends, sausages, pickles, and as a digestive aid after meals.',
        'Teas and Infusions: Fennel seed tea is popular for its digestive and soothing properties.',
        'Medicinal Purposes: Used in traditional medicine for its carminative and digestive benefits.',
      ],
      ingredients: [
        'Flavor Enhancer: Fennel seeds add a sweet and aromatic note to dishes, balancing flavors.',
        'Digestive Aid: Known for its carminative properties, aiding digestion and reducing bloating.',
        'Nutritional Content: Contains minerals like calcium, magnesium, and iron, along with vitamins like vitamin C and vitamin B6.',
      ],
      benefits: [
        'Digestive Health: Traditionally used to alleviate digestive issues like bloating, indigestion, and gas.',
        'Antioxidant Properties: Rich in antioxidants like flavonoids, phenolic compounds, and vitamin C.',
        'Respiratory Support: Fennel seeds may have expectorant properties, aiding in respiratory health.',
      ],
      storage: [
        'Store fennel seeds in an airtight container in a cool, dark place away from heat and moisture.',
        'Ground fennel seeds should be used within a few months for optimal flavor.',
      ],
      p: 'Fennel seeds, prized for their sweet and aromatic flavor, are versatile in culinary applications and offer potential health benefits. They are valued for their digestive properties and are commonly used in traditional remedies for digestive issues.',
      significance: [
        'Culinary Significance: Found in cuisines worldwide, especially in Mediterranean, Indian, and Middle Eastern dishes.',
        'Medicinal Significance: Used in traditional medicine systems like Ayurveda for its therapeutic properties.',
      ],
      summary:
        'Fennel seeds, with their sweet and aromatic profile, are a valuable spice known for their culinary versatility and potential health-promoting properties. Whether used in cooking or herbal remedies, they contribute unique flavors and benefits.',
    },
    {
      id: 19,
      spicePhoto: require('../images/img-19.jpg').default,
      spiceName: 'Fenugreek Seeds',
      botanicalName: 'Trigonella foenum-graecum',
      description:
        'Fenugreek seeds, derived from the Trigonella foenum-graecum plant, are aromatic seeds commonly used in culinary dishes, herbal remedies, and traditional medicine.',
      appearance: [
        'Shape: Small, rectangular seeds with a flat surface.',
        'Color: Light golden to amber with a smooth texture.',
        'Size: Typically 3-5 millimeters in length.',
        'Texture: Smooth and slightly glossy.',
      ],
      flavorandaroma: [
        'Flavor: Bitter, nutty, and slightly sweet with a hint of maple syrup.',
        'Aroma: Aromatic, earthy, and reminiscent of burnt sugar or caramel.',
      ],
      use: [
        'Culinary Uses: Commonly used in Indian, Middle Eastern, and Mediterranean cuisines in curries, spice blends, pickles, and teas.',
        'Herbal Remedies: Known for its potential benefits in digestion, blood sugar management, and lactation support.',
        'External Uses: Fenugreek seeds are sometimes used in skincare and hair care products.',
      ],
      ingredients: [
        'Flavor Enhancer: Fenugreek seeds add depth and complexity to dishes, balancing flavors.',
        'Nutritional Content: Contains minerals like iron, magnesium, and manganese, along with vitamins like vitamin B6 and vitamin C.',
      ],
      benefits: [
        'Digestive Health: Traditionally used to aid digestion, alleviate constipation, and soothe gastrointestinal issues.',
        'Blood Sugar Management: Some studies suggest fenugreek may help regulate blood sugar levels.',
        'Lactation Support: Known to stimulate milk production in breastfeeding mothers.',
      ],
      storage: [
        'Store fenugreek seeds in an airtight container in a cool, dark place away from heat and moisture.',
        'Ground fenugreek should be used within a few months for optimal flavor.',
      ],
      p: 'Fenugreek seeds, with their unique bitter-nutty flavor, are a versatile spice used in various cuisines and herbal remedies. They are valued for their potential health benefits, especially in digestion and blood sugar management.',
      significance: [
        'Culinary Significance: Integral in Indian curries, spice blends like curry powder, and Middle Eastern dishes like salads and stews.',
        'Medicinal Significance: Used in Ayurvedic and traditional medicine for its therapeutic properties.',
      ],
      summary:
        'Fenugreek seeds, prized for their distinct flavor and potential health benefits, are a valuable addition to culinary creations and wellness practices.',
    },
    {
      id: 20,
      spicePhoto: require('../images/img-20.jpg').default,
      spiceName: 'Tamarind',
      botanicalName: 'Tamarindus indica',
      description:
        'Tamarind is a popular tropical fruit known for its sweet and tangy flavor. The pulp extracted from tamarind pods is used as a key ingredient in various cuisines worldwide.',
      appearance: [
        'Form: Tamarind is available as a sticky pulp encased in brown pods.',
        'Color: The pulp ranges from dark brown to reddish-brown, while the pods are brown when ripe.',
        'Texture: The pulp is sticky and fibrous with seeds embedded within.',
      ],
      flavorandaroma: [
        'Flavor: Sweet, tangy, and slightly sour with hints of fruity and floral notes.',
        'Aroma: Aromatic, tangy, and slightly earthy, enhancing the overall flavor of dishes.',
      ],
      use: [
        'Culinary Uses: Commonly used in Asian, Middle Eastern, Latin American, and Caribbean cuisines in sauces, chutneys, marinades, drinks, and desserts.',
        'Flavor Enhancer: Tamarind adds depth, tanginess, and a hint of sweetness to dishes.',
        'Medicinal Purposes: Used in traditional medicine for digestive issues and as a cooling agent.',
      ],
      ingredients: [
        'Flavor Enhancer: Tamarind pulp enriches dishes with its unique sweet and tangy taste.',
        'Nutritional Content: Rich in vitamins like vitamin C, antioxidants, minerals like potassium and magnesium, and dietary fiber.',
      ],
      benefits: [
        'Digestive Health: Known for its potential to aid digestion and relieve constipation.',
        'Antioxidant Properties: Contains polyphenols and flavonoids that may have antioxidant effects.',
        'Cooling Effect: Tamarind-based drinks and dishes are often consumed for their cooling properties.',
      ],
      storage: [
        'Store tamarind pulp in an airtight container in the refrigerator to maintain freshness.',
        'Tamarind concentrate can be stored in the refrigerator for longer shelf life.',
      ],
      p: 'Tamarind, with its unique sweet-tangy flavor, is a versatile ingredient used in diverse culinary creations globally. Apart from its culinary uses, it is valued for its potential health benefits and traditional medicinal uses.',
      significance: [
        'Culinary Significance: Integral in dishes like Pad Thai, sambar, Worcestershire sauce, and tamarind-based candies.',
        'Traditional Uses: Used in Ayurvedic and traditional medicine for its digestive and cooling properties.',
      ],
      summary:
        "Tamarind's distinct flavor profile, nutritional richness, and potential health benefits make it a cherished ingredient in cuisines and traditional remedies worldwide.",
    },
    {
      id: 21,
      spicePhoto: require('../images/img-21.jpg').default,
      spiceName: 'White Peppercorns',
      botanicalName: 'Piper nigrum',
      description:
        'White peppercorns are a spice derived from the dried berries of the Piper nigrum plant. They have a milder flavor compared to black peppercorns and are widely used in various culinary applications.',
      appearance: [
        'Color: Pale white or cream-colored berries.',
        'Texture: Smooth and round with a wrinkled surface.',
      ],
      flavorandaroma: [
        'Flavor: Mildly pungent, earthy, and less spicy than black peppercorns.',
        'Aroma: Aromatic, slightly floral, and less intense than black pepper.',
      ],
      use: [
        'Culinary Uses: Commonly used in light-colored dishes where black specks from black pepper are undesirable, such as white sauces, mashed potatoes, and cream soups.',
        'Flavor Enhancer: Adds a subtle heat and peppery flavor without overpowering dishes.',
        'Traditional Medicine: Used in some traditional medicine systems for its potential health benefits.',
      ],
      ingredients: [
        'Flavor Enhancer: White peppercorns impart a mild peppery taste to dishes.',
        'Digestive Aid: Traditionally used to aid digestion and alleviate gastrointestinal discomfort.',
        'Nutritional Content: Contains vitamins like vitamin K, minerals like manganese, and dietary fiber.',
      ],
      benefits: [
        'Digestive Health: Traditionally used to aid digestion and alleviate gastrointestinal discomfort.',
        'Antimicrobial Properties: Contains compounds with potential antimicrobial effects.',
        'Anti-inflammatory Effects: May have mild anti-inflammatory properties.',
      ],
      storage: [
        'Store white peppercorns in an airtight container in a cool, dark place away from heat and moisture.',
        'Grind as needed to retain freshness and flavor.',
      ],
      p: 'White peppercorns, prized for their milder flavor compared to black peppercorns, are a versatile spice used in various culinary dishes. They offer subtle heat and peppery notes without the visible specks, making them ideal for lighter-colored recipes.',
      significance: [
        'Culinary Significance: Used in European, Asian, and global cuisines for flavoring light-colored dishes.',
        'Traditional Uses: Employed in traditional medicine for digestive and potential antimicrobial benefits.',
      ],
      summary:
        'White peppercorns, with their mild yet flavorful profile, are a popular choice in culinary creations where a lighter pepper presence is desired. They also offer potential health benefits, contributing to their value in both kitchens and traditional medicine.',
    },
    {
      id: 22,
      spicePhoto: require('../images/img-22.jpg').default,
      spiceName: 'Asafoetida',
      botanicalName: 'Ferula assa-foetida',
      description:
        'Asafoetida, also known as hing, is a resinous gum derived from the Ferula assa-foetida plant. It is a pungent spice commonly used in Indian and Middle Eastern cuisines for its strong flavor and aroma.',
      appearance: [
        'Form: Asafoetida is available in resin or powdered form.',
        'Color: The resin is brownish in color, while the powdered form is light yellow to reddish-brown.',
        'Texture: The resin is solid and resinous, while the powder is fine and granular.',
      ],
      flavorandaroma: [
        'Flavor: Pungent, savory, and slightly bitter with onion and garlic undertones.',
        'Aroma: Strong, sulfurous, and distinctive, mellows upon cooking.',
      ],
      use: [
        'Culinary Uses: Commonly used as a flavor enhancer in vegetarian and lentil dishes, pickles, and spice blends like curry powder.',
        'Cooking Technique: Asafoetida is often fried in oil or ghee to release its flavors before adding other ingredients.',
        'Medicinal Purposes: Used in traditional medicine for its potential digestive and respiratory benefits.',
      ],
      ingredients: [
        'Flavor Enhancer: Asafoetida adds a unique savory flavor to dishes, enhancing their taste profile.',
        'Digestive Aid: Known for its carminative properties, aiding digestion and reducing flatulence.',
        'Nutritional Content: Contains compounds like ferulic acid and antioxidants.',
      ],
      benefits: [
        'Digestive Health: Traditionally used to alleviate digestive issues like bloating, indigestion, and gas.',
        'Respiratory Support: Some traditional remedies use asafoetida for respiratory ailments like asthma and bronchitis.',
        'Antimicrobial Properties: Contains compounds with potential antimicrobial and anti-inflammatory effects.',
      ],
      storage: [
        'Store asafoetida in an airtight container away from moisture and light, as exposure can degrade its flavor.',
        'Keep powdered asafoetida away from direct heat to prevent clumping and loss of potency.',
      ],
      p: 'Asafoetida, with its strong and distinctive flavor, is a key ingredient in many cuisines and traditional remedies. It is valued not only for its culinary contributions but also for its potential health benefits, especially in aiding digestion and respiratory wellness.',
      significance: [
        'Culinary Significance: Essential in Indian and Middle Eastern cuisines, especially in vegetarian dishes and spice blends.',
        'Medicinal Significance: Used in Ayurvedic and traditional medicine for its therapeutic properties.',
      ],
      summary:
        'Asafoetida, known for its pungent flavor and aroma, plays a vital role in culinary creations and traditional remedies. Its unique taste profile and potential health benefits make it a valuable spice in various cultural practices.',
    },
    {
      id: 23,
      spicePhoto: require('../images/img-23.jpg').default,

      spiceName: 'Coriander Seeds',
      botanicalName: 'Coriandrum sativum',
      description:
        'Coriander seeds are the dried fruits of the Coriandrum sativum plant, commonly known as cilantro or coriander in fresh herb form. They are a versatile spice used in various cuisines worldwide.',
      appearance: [
        'Shape: Round, small seeds.',
        'Color: Light brown to golden yellow.',
      ],
      flavorandaroma: [
        'Flavor: Warm, citrusy, and slightly nutty with a hint of sweetness.',
        'Aroma: Aromatic, citrusy, and earthy.',
      ],
      use: [
        'Culinary Uses: Widely used in spice blends, curry powders, pickling, soups, stews, and marinades.',
        'Whole vs. Ground: Whole seeds are toasted or ground to release flavors, ground seeds are used in spice blends and cooking.',
        'Herbal Medicine: Coriander seeds are used in traditional medicine for digestive and anti-inflammatory purposes.',
      ],
      ingredients: [
        'Flavor Enhancer: Coriander seeds add depth and complexity to dishes, balancing flavors.',
        'Nutritional Content: Rich in vitamins like vitamin C, vitamin K, minerals like manganese, iron, and dietary fiber.',
      ],
      benefits: [
        'Digestive Aid: Known for aiding digestion, reducing bloating, and soothing stomach discomfort.',
        'Antioxidant Properties: Contains antioxidants like flavonoids and phenolic compounds.',
        'Anti-inflammatory Effects: Some compounds in coriander seeds may have mild anti-inflammatory effects.',
      ],
      storage: [
        'Store coriander seeds in an airtight container in a cool, dry place away from sunlight and moisture.',
        'Ground coriander loses flavor quickly, so grind it as needed for freshest flavor.',
      ],
      p: 'Coriander seeds, with their warm and citrusy flavor, are a staple in many cuisines and spice blends. They not only enhance the taste of dishes but also offer potential health benefits, particularly in aiding digestion and providing antioxidants.',
      significance: [
        'Culinary Significance: Essential in Indian, Middle Eastern, Latin American, and Southeast Asian cuisines.',
        'Medicinal Significance: Used in traditional medicine systems like Ayurveda and Unani for various health purposes.',
      ],
      summary:
        'Coriander seeds, prized for their aromatic flavor and potential health benefits, are a versatile spice used in cooking and traditional medicine worldwide.',
    },
    {
      id: 24,
      spicePhoto: require('../images/img-24.jpg').default,

      spiceName: 'Yellow Mustard',
      botanicalName: 'Sinapis alba',
      description:
        'Yellow mustard, also known as white mustard, is derived from the seeds of the Sinapis alba plant. It is a mild and versatile spice commonly used in culinary applications.',
      appearance: [
        'Color: Yellowish-white to light yellow.',
        'Shape: Small round seeds.',
      ],
      flavorandaroma: [
        'Flavor: Mildly pungent, slightly bitter, and tangy.',
        'Aroma: Aromatic, slightly spicy.',
      ],
      use: [
        'Culinary Uses: Used as a condiment in mustard sauces, salad dressings, marinades, and pickling.',
        'Baking: Ground mustard is used in baking recipes, giving a subtle heat and flavor to bread and pretzels.',
        'Preservation: Mustard seeds are used in pickling for their preservative properties.',
      ],
      ingredients: [
        'Flavor Enhancer: Yellow mustard adds tanginess and subtle heat to dishes, enhancing flavors.',
        'Nutritional Content: Contains minerals like selenium, magnesium, and dietary fiber.',
      ],
      benefits: [
        'Digestive Aid: Contains compounds that may aid digestion and alleviate stomach discomfort.',
        'Antioxidant Properties: Contains antioxidants like selenium, which helps neutralize free radicals.',
        'Anti-inflammatory Effects: Some compounds in mustard seeds may have mild anti-inflammatory effects.',
      ],
      storage: [
        'Store yellow mustard seeds in a cool, dry place in an airtight container to retain freshness and flavor.',
        'Ground mustard should be stored similarly and used within a few months for optimal flavor.',
      ],
      p: 'Yellow mustard, known for its mild pungency and tangy flavor, is a versatile spice used in a range of culinary dishes and preparations. Beyond its culinary uses, it also offers potential health benefits, particularly in digestion and as an antioxidant.',
      significance: [
        'Culinary Significance: Widely used in American, European, and Indian cuisines for its flavor and preservative properties.',
        'Historical Significance: Yellow mustard has a long history of culinary and medicinal use dating back centuries.',
      ],
      summary:
        'Yellow mustard seeds, prized for their mild yet distinctive flavor, are a common ingredient in condiments and culinary recipes worldwide. Their potential health benefits and preservative properties further enhance their value in various cuisines.',
    },
    {
      id: 25,
      spicePhoto: require('../images/img-25.jpg').default,
      spiceName: 'Pomegranate Seeds',
      botanicalName: 'Punica granatum',
      description:
        'Pomegranate seeds, derived from the Punica granatum fruit, are prized for their vibrant color, sweet-tart flavor, and nutritional benefits. They are commonly used in culinary dishes and beverages.',
      appearance: [
        'Color: Bright ruby-red to deep crimson.',
        'Texture: Juicy and crunchy with a seed inside each aril.',
      ],
      flavorandaroma: [
        'Flavor: Sweet and tangy with a refreshing burst of juiciness.',
        'Aroma: Aromatic, fruity, and slightly floral.',
      ],
      use: [
        'Culinary Uses: Pomegranate seeds are used in salads, desserts, smoothies, cocktails, and as a garnish.',
        'Juices and Extracts: Pomegranate seeds are pressed for their juice, which is used in beverages and culinary preparations.',
      ],
      ingredients: [
        'Nutritional Content: Packed with antioxidants, vitamins C and K, potassium, and dietary fiber.',
      ],
      benefits: [
        'Antioxidant Powerhouse: Known for their high antioxidant content, which may contribute to overall health.',
        'Anti-inflammatory Effects: Compounds in pomegranate seeds may help reduce inflammation in the body.',
      ],
      storage: [
        'Fresh pomegranate seeds can be stored in an airtight container in the refrigerator for up to a week.',
        'Frozen seeds can be kept for several months and used in smoothies and desserts.',
      ],
      p: 'Pomegranate seeds are not only a culinary delight but also offer a range of health benefits due to their rich nutritional profile. They are widely used in various cuisines and beverages for their unique flavor and color.',
      significance: [
        'Culinary Significance: Found in cuisines worldwide, especially in Middle Eastern, Mediterranean, and Indian dishes.',
        'Symbolic Significance: In some cultures, pomegranates symbolize fertility, abundance, and prosperity.',
      ],
      summary:
        'Pomegranate seeds, with their unique blend of flavor and nutrients, are a versatile ingredient cherished in culinary creations. They offer a refreshing burst of taste and potential health advantages, making them a valuable addition to a balanced diet.',
    },
    {
      id: 26,
      spicePhoto: require('../images/img-26.jpg').default,
      spiceName: 'Black Poppy Seeds',
      botanicalName: 'Papaver somniferum',
      description:
        'Black poppy seeds are derived from the dried seeds of the Papaver somniferum plant. They are small, kidney-shaped seeds with a dark bluish-black color, commonly used in culinary and medicinal applications.',
      appearance: [
        'Color: Dark bluish-black.',
        'Size: Small, kidney-shaped seeds.',
      ],
      flavorandaroma: [
        'Flavor: Nutty, earthy, and mildly sweet.',
        'Aroma: Aromatic with subtle floral notes.',
      ],
      use: [
        'Culinary Uses: Widely used in baking, confectionery, and savory dishes.',
        'Texture: Adds a pleasant crunch to dishes when used as a topping.',
      ],
      ingredients: [
        'Nutritional Content: Rich in essential nutrients like calcium, iron, magnesium, and dietary fiber.',
        'Omega-3 Fatty Acids: Contains healthy fats that contribute to heart and brain health.',
        'Protein: Provides a source of plant-based protein, important for muscle and tissue repair.',
      ],
      benefits: [
        'Nutrient Boost: Poppy seeds are a good source of minerals like calcium and magnesium.',
        'Digestive Health: Contains dietary fiber, aiding in digestion and promoting gut health.',
        'Mood Regulation: Contains compounds that may have a calming effect on the nervous system.',
      ],
      storage: [
        'Store poppy seeds in an airtight container in a cool, dark place to maintain freshness and flavor.',
        'Ground poppy seeds should be used promptly to preserve their volatile oils and flavor.',
      ],
      p: 'Black poppy seeds, known for their distinctive color and nutty flavor, are a versatile ingredient in various cuisines worldwide. They not only add texture and flavor to dishes but also offer nutritional benefits, making them a valuable addition to a balanced diet.',
      significance: [
        'Culinary Significance: Integral in baking, especially in bread, pastries, and desserts.',
        'Traditional Use: Used in traditional medicine for their potential health benefits and calming properties.',
      ],
      summary:
        'Black poppy seeds, with their rich nutrient profile and culinary versatility, are a popular ingredient with both culinary and medicinal value. Incorporating them into your cooking can enhance flavors and provide potential health advantages.',
    },
    {
      id: 27,
      spicePhoto: require('../images/img-27.jpg').default,
      spiceName: 'White Poppy Seeds',
      botanicalName: 'Papaver somniferum',
      description:
        'White poppy seeds, derived from the Papaver somniferum plant, are small kidney-shaped seeds with a creamy-white color. They are known for their nutty flavor and are commonly used in culinary applications.',
      appearance: ['Color: Creamy-white.', 'Size: Small, kidney-shaped seeds.'],
      flavorandaroma: [
        'Flavor: Nutty and slightly sweet.',
        'Aroma: Mild, nutty aroma.',
      ],
      use: [
        'Culinary Uses: Widely used in baking, desserts, pastries, and savory dishes.',
        'Texture: Adds a subtle crunch and texture to dishes.',
      ],
      ingredients: [
        'Nutritional Content: Contains essential nutrients like calcium, iron, magnesium, and dietary fiber.',
        'Healthy Fats: Provides beneficial fats that support heart and brain health.',
      ],
      benefits: [
        'Nutrient Rich: White poppy seeds offer a range of essential minerals and dietary fiber.',
        'Heart Health: The presence of healthy fats can contribute to cardiovascular wellness.',
        'Culinary Versatility: Used in various cuisines for flavor, texture, and nutritional value.',
      ],
      storage: [
        'Store white poppy seeds in an airtight container in a cool, dry place away from heat and light.',
        'Ground poppy seeds should be used promptly to retain freshness and flavor.',
      ],
      p: 'White poppy seeds are valued for their nutty flavor, nutritional content, and culinary versatility. They are a common ingredient in baked goods, desserts, and savory dishes, adding both texture and flavor to recipes.',
      significance: [
        'Culinary Importance: Integral in baking, especially in bread, pastries, and desserts across various cuisines.',
        'Cultural Significance: Used in traditional recipes and ceremonies in certain cultures.',
      ],
      summary:
        'White poppy seeds, with their creamy-white appearance and nutty flavor, are a nutritious and versatile ingredient in cooking. Incorporating them into your dishes not only adds taste and texture but also provides essential nutrients and potential health benefits.',
    },
    {
      id: 28,
      spicePhoto: require('../images/img-28.jpg').default,
      spiceName: 'Saffron',
      botanicalName: 'Crocus sativus',
      description:
        'Saffron is a prized spice derived from the stigma of the Crocus sativus flower. It is known for its vibrant color, distinct flavor, and aromatic qualities, making it one of the most valuable spices in the world.',
      appearance: [
        'Color: Deep red threads with a slight orange hue.',
        'Form: Long, thin threads that are hand-harvested from saffron crocus flowers.',
      ],
      flavorandaroma: [
        'Flavor: Rich, floral, and slightly bitter with a hint of honey-like sweetness.',
        'Aroma: Aromatic, earthy, and pleasantly floral.',
      ],
      use: [
        'Culinary Uses: Widely used in various cuisines, especially in rice dishes like paella, risotto, and biryani, as well as in desserts and beverages.',
        'Coloring Agent: Saffron is used to impart a vibrant yellow-orange color to dishes.',
        'Medicinal Purposes: Traditional medicine uses saffron for its potential health benefits.',
      ],
      ingredients: [
        'Active Compounds: Contains crocin, safranal, and picrocrocin, which contribute to its flavor, color, and aroma.',
        'Nutritional Content: Rich in antioxidants, vitamins, and minerals such as vitamin A, vitamin C, potassium, and manganese.',
      ],
      benefits: [
        'Antioxidant Properties: Saffron is rich in antioxidants that help neutralize free radicals in the body.',
        'Mood Enhancement: Some studies suggest saffron may have mood-improving and antidepressant effects.',
        'Potential Health Benefits: Traditional medicine uses saffron for its anti-inflammatory and digestive properties.',
      ],
      storage: [
        'Store saffron in an airtight container in a cool, dark place away from sunlight and moisture.',
        "Avoid exposure to heat or direct light, as they can degrade saffron's flavor and color.",
      ],
      p: 'Saffron, renowned for its exquisite flavor, vivid color, and aromatic qualities, has been prized in culinary and medicinal traditions for centuries. It not only enhances the taste and appearance of dishes but also offers potential health benefits due to its rich antioxidant content and active compounds.',
      significance: [
        'Culinary Significance: Integral in dishes from various cultures, adding both flavor and color.',
        'Historical Importance: Saffron has a long history of use in cooking, medicine, and cultural practices.',
      ],
      summary:
        'Saffron, with its unique flavor profile, vibrant color, and potential health benefits, remains a highly sought-after spice in global cuisines and traditional medicine.',
    },
    {
      id: 29,
      spicePhoto: require('../images/img-29.jpg').default,
      spiceName: 'Thyme Dry Leaves',
      botanicalName: 'Thymus vulgaris',
      description:
        'Thyme dry leaves are derived from the Thymus vulgaris plant, known for their aromatic and flavorful characteristics. These leaves are commonly used as a culinary herb and also have medicinal properties.',
      appearance: [
        'Color: Grayish-green to olive-green.',
        'Texture: Small, dried leaves with a slightly brittle texture.',
      ],
      flavorandaroma: [
        'Flavor: Warm, earthy, and slightly peppery.',
        'Aroma: Aromatic, herbaceous, and mildly floral.',
      ],
      use: [
        'Culinary Uses: Thyme leaves are a staple in Mediterranean and European cuisines, used in soups, stews, roasted meats, vegetables, and sauces.',
        'Medicinal Purposes: Thyme has been traditionally used for its antiseptic, expectorant, and digestive properties.',
      ],
      ingredients: [
        'Active Compounds: Contains thymol, carvacrol, and other volatile oils that contribute to its flavor and medicinal properties.',
        'Nutritional Content: Rich in vitamins (such as vitamin K), minerals (like iron and manganese), and antioxidants.',
      ],
      benefits: [
        'Respiratory Health: Thyme is known for its expectorant properties, aiding in respiratory conditions like coughs and bronchitis.',
        'Antimicrobial Effects: Thymol in thyme exhibits antimicrobial properties, useful for oral health and fighting infections.',
        'Digestive Aid: Traditionally used to aid digestion and relieve gastrointestinal discomfort.',
      ],
      storage: [
        'Store dried thyme leaves in an airtight container in a cool, dry place away from heat and sunlight.',
        'Avoid storing near moisture to prevent clumping.',
      ],
      p: 'Thyme dry leaves, with their aromatic and flavorful profile, are a versatile herb used in cooking and traditional medicine. They not only enhance the taste of dishes but also offer potential health benefits due to their rich nutrient and active compound content.',
      significance: [
        'Culinary Significance: Integral in Mediterranean, European, and Middle Eastern cuisines, adding depth to various dishes.',
        'Medicinal Significance: Used in herbal remedies for centuries due to its medicinal properties.',
      ],
      summary:
        'Thyme dry leaves, with their warm flavor and medicinal properties, are a valuable addition to culinary creations and herbal remedies alike.',
    },
    // Add more spice objects as needed
  ];

  // Find the selected spice from spiceData
  const selectedSpice = spiceData.find((spice) => spice.id === parseInt(id));

  return (
    <div className="spice-description-container">
      <SpiceInfo spice={selectedSpice} />
    </div>
  );
};

export default SpicesDescription;
