// src/data/productData.js
import img1 from '../assets/Hp1.jpeg';
import img2 from '../assets/HP LaserJet Pro MFP M428fdw.jpeg';
import img3 from '../assets/HP LaserJet Pro MFP M479fdw.jpeg';
import img4 from '../assets/HP OfficeJet Pro 9015.jpeg';
import img5 from '../assets/HP OfficeJet Pro 8025.jpeg';
import img6 from '../assets/HP OfficeJet 5255.jpeg';
import img7 from '../assets/HP Envy 6055e.jpeg';
import img8 from '../assets/HP Ink Cartridges.jpeg';
import img9 from '../assets/HP Toner Cartridges.jpeg';
import img10 from '../assets/HP Paper Trays.jpeg';
import img11 from '../assets/HP Duplexers.jpeg';
import img12 from '../assets/HP Print Servers.jpeg';
import img13 from '../assets/Dell C1760NW.jpeg';
import img14 from '../assets/Dell C2660dn.jpeg';
import img15 from '../assets/Dell C3760dn.jpeg';
import img16 from '../assets/Dell B2360dn.jpeg';
import img17 from '../assets/Dell B3460dn.jpeg';
import img18 from '../assets/Dell V525w.jpeg';
import img19 from '../assets/Dell Toner Cartridges.jpeg';
import img20 from '../assets/Dell Paper Trays.jpeg';
import img21 from '../assets/Canon PIXMA TS5320.jpeg';
import img22 from '../assets/Canon PIXMA TR4520.jpeg';
import img23 from '../assets/Canon PIXMA G7020.jpeg';




export const products = [
    // HP Products
    {
      id: 1,
      name: 'HP LaserJet Pro M15w',
      category: 'HP LaserJet Pro Series',
      description: 'Compact and efficient laser printer for home and small offices.',
      price: 129.99,
      image: img1,
      details: 'The HP LaserJet Pro M15w offers fast printing in a compact design, ideal for home offices.',
      specifications: [
        'Print speed: Up to 19 pages per minute',
        'Wireless printing via Wi-Fi',
        'Print resolution: 600 x 600 dpi',
        'Connectivity: Wi-Fi, USB 2.0'
      ]
    },
    {
      id: 2,
      name: 'HP LaserJet Pro MFP M428fdw',
      category: 'HP LaserJet Pro Series',
      description: 'Monochrome all-in-one laser printer with security features.',
      price: 369.99,
      image: img2,
      details: 'Perfect for high-volume printing with added security and mobile printing support.',
      specifications: [
        'Print speed: Up to 40 pages per minute',
        'Automatic duplex printing',
        'Mobile printing support (Apple AirPrint, Google Cloud Print)',
        'Monthly duty cycle: Up to 30,000 pages'
      ]
    },
    {
      id: 3,
      name: 'HP LaserJet Pro MFP M479fdw',
      category: 'HP LaserJet Pro Series',
      description: 'Color laser all-in-one printer designed for businesses.',
      price: 499.99,
      image: img3,
      details: 'Advanced color laser printing with scanning, copying, and faxing capabilities.',
      specifications: [
        'Print speed: Up to 28 pages per minute',
        'Automatic duplex printing',
        'Mobile printing support',
        'Monthly duty cycle: Up to 50,000 pages'
      ]
    },
  
    {
      id: 4,
      name: 'HP OfficeJet Pro 9015',
      category: 'HP OfficeJet Series',
      description: 'All-in-one inkjet printer designed for small businesses and home offices.',
      price: 229.99,
      image: img4,
      details: 'The HP OfficeJet Pro 9015 is a fast, versatile inkjet printer with professional-quality output.',
      specifications: [
        'Print speed: Up to 22 pages per minute',
        'Automatic 2-sided printing',
        'Wi-Fi, Ethernet, and USB connectivity',
        'Works with HP Instant Ink'
      ]
    },
    {
      id: 5,
      name: 'HP OfficeJet Pro 8025',
      category: 'HP OfficeJet Series',
      description: 'Reliable and efficient all-in-one inkjet printer for home office.',
      price: 179.99,
      image: img5,
      details: 'Designed for everyday printing tasks with easy-to-use features and professional results.',
      specifications: [
        'Print speed: 20 pages per minute (black)',
        'Automatic duplex printing',
        'Mobile printing support',
        'Compatible with HP Instant Ink'
      ]
    },
    {
      id: 6,
      name: 'HP OfficeJet 5255',
      category: 'HP OfficeJet Series',
      description: 'Wireless all-in-one printer for printing, scanning, copying, and faxing.',
      price: 139.99,
      image: img6,
      details: 'Perfect for home use, with mobile printing and simple setup.',
      specifications: [
        'Print speed: 10 pages per minute (black)',
        'Wi-Fi, Bluetooth, and USB connectivity',
        'Automatic duplex printing',
        'Works with HP Instant Ink'
      ]
    },
    {
      id: 7,
      name: 'HP Envy 6055e',
      category: 'HP Envy Series',
      description: 'Compact all-in-one printer designed for photo and document printing.',
      price: 179.99,
      image: img7,
      details: 'Ideal for families and home offices needing versatile printing and wireless capabilities.',
      specifications: [
        'Print speed: 10 pages per minute (black)',
        'Mobile printing via Wi-Fi and Bluetooth',
        'Supports HP Instant Ink',
        'Automatic 2-sided printing'
      ]
    },
  
    // HP Accessories
    {
      id: 8,
      name: 'HP Ink Cartridges (HP 62, HP 67, HP 952)',
      category: 'HP Ink Cartridges',
      description: 'Genuine HP ink cartridges for HP printers.',
      price: 29.99,
      image: img8,
      details: 'Genuine HP ink cartridges for clear, vibrant prints.',
      specifications: [
        'Compatible with HP OfficeJet and Envy printers',
        'Available in black, cyan, magenta, yellow',
        'High-yield options available'
      ]
    },
    {
      id: 9,
      name: 'HP Toner Cartridges (HP 26A, HP 80A, HP 410A)',
      category: 'HP Toner Cartridges',
      description: 'Original HP toner cartridges for HP LaserJet printers.',
      price: 69.99,
      image: img9,
      details: 'Genuine HP toner for sharp, professional-quality documents.',
      specifications: [
        'Available in black, cyan, magenta, yellow',
        'For HP LaserJet printers'
      ]
    },
    {
      id: 10,
      name: 'HP Paper Trays',
      category: 'HP Accessories',
      description: 'Extra paper trays for HP printers to increase paper capacity.',
      price: 39.99,
      image: img10,
      details: 'Add additional paper capacity to your HP printer.',
      specifications: [
        'Compatible with various HP LaserJet and OfficeJet models',
        'Additional capacity for continuous printing'
      ]
    },
    {
      id: 11,
      name: 'HP Duplexers',
      category: 'HP Accessories',
      description: 'Automatic duplexers for double-sided printing.',
      price: 79.99,
      image: img11,
      details: 'For automatic double-sided printing on compatible HP printers.',
      specifications: [
        'Compatible with select HP LaserJet models',
        'Easy installation for seamless duplex printing'
      ]
    },
    {
      id: 12,
      name: 'HP Print Servers',
      category: 'HP Accessories',
      description: 'Networking solutions to connect multiple users to your HP printer.',
      price: 99.99,
      image: img12,
      details: 'Networking solution for creating shared printing environments.',
      specifications: [
        'Supports various HP LaserJet and OfficeJet printers',
        'Wired and wireless options available'
      ]
    },
  
    // Dell Products
    {
      id: 13,
      name: 'Dell C1760NW',
      category: 'Dell Laser Printers',
      description: 'Compact color laser printer designed for small offices.',
      price: 179.99,
      image: img13,
      details: 'A color laser printer that supports wireless and mobile printing.',
      specifications: [
        'Print speed: Up to 15 pages per minute (black)',
        'Connectivity: Wi-Fi, USB, Ethernet',
        'Print resolution: 600 x 600 dpi'
      ]
    },
    {
      id: 14,
      name: 'Dell C2660dn',
      category: 'Dell Laser Printers',
      description: 'High-speed color laser printer for business environments.',
      price: 299.99,
      image: img14,
      details: 'Fast color laser printing for offices with a high monthly duty cycle.',
      specifications: [
        'Print speed: Up to 30 pages per minute',
        'Duplex printing',
        'Connectivity: Ethernet, USB'
      ]
    },
    {
      id: 15,
      name: 'Dell C3760dn',
      category: 'Dell Laser Printers',
      description: 'High-performance color laser printer for demanding environments.',
      price: 499.99,
      image: img15,
      details: 'Built for high-volume printing with fast color output.',
      specifications: [
        'Print speed: Up to 35 pages per minute',
        'Automatic duplex printing',
        'Connectivity: Ethernet, USB, Wi-Fi'
      ]
    },
  
    // Dell Accessories
    {
      id: 16,
      name: 'Dell B2360dn',
      category: 'Dell Accessories',
      description: 'Mono laser printer with high-speed printing for small businesses.',
      price: 179.99,
      image: img16,
      details: 'Efficient black-and-white printing for offices with great cost-per-page.',
      specifications: [
        'Print speed: Up to 30 pages per minute',
        'Automatic duplex printing',
        'Connectivity: Ethernet, USB'
      ]
    },
    {
      id: 17,
      name: 'Dell B3460dn',
      category: 'Dell Accessories',
      description: 'Mono laser printer for high-volume printing.',
      price: 259.99,
      image:img17,
      details: 'Ideal for larger offices that require fast, high-quality black-and-white prints.',
      specifications: [
        'Print speed: Up to 45 pages per minute',
        'Duplex printing',
        'Connectivity: Ethernet, USB'
      ]
    },
    {
      id: 18,
      name: 'Dell V525w',
      category: 'Dell Inkjet Printers',
      description: 'Wireless inkjet printer with versatile printing options.',
      price: 129.99,
      image: img18,
      details: 'Fast and efficient printing with mobile and cloud capabilities.',
      specifications: [
        'Print speed: Up to 22 pages per minute (black)',
        'Connectivity: Wi-Fi, USB',
        'Supports mobile printing'
      ]
    },
  
    // Dell Toner and Accessories
    {
      id: 19,
      name: 'Dell Toner Cartridges (Dell 593-11070, Dell 593-11056)',
      category: 'Dell Toner Cartridges',
      description: 'Genuine toner cartridges for Dell printers.',
      price: 69.99,
      image: img19,
      details: 'For high-quality prints with excellent page yield.',
      specifications: [
        'Compatible with Dell Laser and Mono printers',
        'Available in black, cyan, magenta, yellow'
      ]
    },
    {
      id: 20,
      name: 'Dell Drum Units',
      category: 'Dell Accessories',
      description: 'Drum units for Dell laser printers for optimal performance.',
      price: 79.99,
      image: img20,
      details: 'Keep your Dell laser printer in top condition with genuine drum units.',
      specifications: [
        'Compatible with various Dell printer models',
        'Provides high-quality prints and extended durability'
      ]
    },
  
    // Canon Products
    {
      id: 21,
      name: 'Canon PIXMA TS5320',
      category: 'Canon PIXMA Series',
      description: 'Wireless all-in-one inkjet printer for home use.',
      price: 99.99,
      image: img21,
      details: 'Compact design with wireless printing options, ideal for photo printing.',
      specifications: [
        'Print resolution: 4800 x 1200 dpi',
        'Wi-Fi connectivity',
        'Automatic duplex printing'
      ]
    },
    {
      id: 22,
      name: 'Canon PIXMA TR4520',
      category: 'Canon PIXMA Series',
      description: 'Affordable all-in-one inkjet printer for home offices.',
      price: 129.99,
      image: img22,
      details: 'Supports mobile printing and includes a 20-sheet ADF for scanning.',
      specifications: [
        'Print speed: 8.8 ipm (color), 16.3 ipm (black)',
        'Supports mobile printing',
        'Automatic document feeder (ADF)'
      ]
    },
    {
      id: 23,
      name: 'Canon PIXMA G7020',
      category: 'Canon PIXMA Series',
      description: 'All-in-one printer with large ink tanks for cost-effective printing.',
      price: 249.99,
      image: img23,
      details: 'Designed for high-volume printing with a low cost per page.',
      specifications: [
        'Print speed: 13 ipm (black), 6.8 ipm (color)',
        'High-yield ink tanks',
        'Mobile printing support'
      ]
    }
  ];
  