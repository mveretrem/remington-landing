export const BRAND = {
  logo: {
    src: '/images/remington_logo.png',
    alt: 'Remington Construction',
  },
} as const;

export const BRAND_COLORS = {
  primary: '#1A1A1A',
  secondary: '#4A4A4A',
  orange: '#E54B0D',
} as const;

export const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Our Clients', href: '#clients' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
] as const;

export const HERO_CONTENT = {
  title: 'DELIVERING VALUE TO OUR CLIENTS THROUGH CUTTING-EDGE TECHNOLOGY',
  subtitle: 'HVAC, Plumbing and General Contracting Services',
  backgroundImage: '/images/hero/hero_background_plumbing.jpg'
} as const;

export const ABOUT_CONTENT = {
  heading: 'About Us',
  quote: {
    text: '"The ability to establish, grow, extend, and restore trust is the key professional and personal competency of our time."',
    author: 'STEPHEN M.R. COVEY',
  },
  description: 'We believe in building strong business relationships. We know it takes years to develop a trustworthy relationship and only seconds to lose one. Our team is staffed with highly qualified industry professionals that resolve issues promptly. We understand the importance of customer service and strive to deliver a high-quality finished product.',
  image: {
    src: '/images/about/about_machines.jpg',
    alt: 'Industrial flow meters and valves',
  },
} as const;

export const SERVICES_CONTENT = {
  heading: 'Our Services',
  services: [
    {
      id: 1,
      title: 'HVAC',
      description: 'An industry leader in the design, planning and installation of HVAC systems, Remington Construction rises to the challenge of tackling complex jobs. We offer a complete service - from designing your company\'s climate control solution - to comprehensive service and maintenance.',
      image: {
        src: '/images/services/services_hvac.jpg',
        alt: 'HVAC ductwork system',
      },
      href: '#hvac',
    },
    {
      id: 2,
      title: 'Plumbing',
      description: 'Committed to using excellent materials and construction techniques that will last for many years to come, Remington is known for considering even small details to make future property maintenance a breeze. As a fast-growing company, Remington has embraced new technology as a key to staying on top of their industry.',
      image: {
        src: '/images/services/services_plumbing.jpg',
        alt: 'Industrial plumbing pipes',
      },
      href: '#plumbing',
    },
    {
      id: 3,
      title: 'General Contracting',
      description: 'Our General Contracting services, administered by experienced construction managers, will effectively minimize your risk and maximize your return on investment. Our team can handle multi-family renovation projects of all sizes and has a lot of success and experience renovating existing buildings while occupied.',
      image: {
        src: '/images/services/services_general_contracting.jpg',
        alt: 'Construction site with cranes',
      },
      href: '#general-contracting',
    },
  ],
} as const;

export const CLIENTS_CONTENT = {
  heading: 'Our Clients',
  clients: [
    {
      name: 'Velux',
      logoSrc: '/images/brands/brand-velux.png',
      alt: 'Velux - Skylight Solutions Partner',
    },
    {
      name: 'Icopal',
      logoSrc: '/images/brands/brand-icopal.png',
      alt: 'Icopal - Roofing Solutions Partner',
    },
    {
      name: 'Decran',
      logoSrc: '/images/brands/brand-decran.png',
      alt: 'Decran - Building Materials Partner',
    },
    {
      name: 'Mastersystems',
      logoSrc: '/images/brands/brand-mastersystems.png',
      alt: 'Mastersystems - Construction Partner',
    },
  ],
} as const;

export const FALLBACK_PROJECT_IMAGE = {
  src: '/images/placeholder-project.jpg',
  alt: 'Project placeholder image',
} as const;

const PROJECT_PLACEHOLDER =
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop';

export const PROJECTS_CONTENT = {
  heading: 'Our Projects',
  categories: [
    {
      id: 1,
      name: 'Multi-Family',
      projects: [
        {
          id: 1,
          title: 'University of Florida',
          location: '1500 Museum Rd, Gainesville, FL 32611',
          scope:
            'Our team managed the comprehensive mechanical build-out for two new dormitory buildings and a dedicated shell space, featuring the installation of 282 water source heat pumps (WSHPs) and steam heat exchangers. The project also encompassed the construction of a new central utility plant along with all associated hydronic piping infrastructure to support the campus expansion.',
          image: '/images/projects/university-of-florida/university-of-florida-1.jpg',
          images: [
            { image: '/images/projects/university-of-florida/university-of-florida-1.jpg' },
            { image: '/images/projects/university-of-florida/university-of-florida-2.jpg' },
            { image: '/images/projects/university-of-florida/university-of-florida-3.jpg' },
          ],
          href: '#university-of-florida',
          showViewMore: true,
        },
        {
          id: 2,
          title: '1661 Crescent Place',
          location: '1661 Crescent Pl NW, Washington, DC 20009',
          scope:
            'Phased HVAC replacement for a 53-unit luxury historic cooperative. The work involved the replacement of steam radiators with Daikin VRV systems, consisting of 211 total indoor units and 2 Dedicated Outdoor Air Systems (DOAS) with ductwork.',
          image: '/images/projects/1661-crescent-place/1661-crescent-place-1.jpg',
          images: [
            { image: '/images/projects/1661-crescent-place/1661-crescent-place-1.jpg' },
            { image: '/images/projects/1661-crescent-place/1661-crescent-place-2.jpg' },
            { image: '/images/projects/1661-crescent-place/1661-crescent-place-3.jpg' },
          ],
          href: '#1661-crescent-place',
        },
        {
          id: 3,
          title: 'Snowden Creek',
          location: '5825 Oklahoma Rd, Eldersburg, MD 21784',
          scope:
            'New installation of HVAC systems for a 101-unit senior living facility. Remington Construction installed 111 Trane split systems, common and individual exhaust systems, and electrical heaters.',
          image: '/images/projects/snowden-creek/snowden-creek-1.jpg',
          images: [
            { image: '/images/projects/snowden-creek/snowden-creek-1.jpg' },
            { image: '/images/projects/snowden-creek/snowden-creek-2.jpg' },
            { image: '/images/projects/snowden-creek/snowden-creek-3.jpg' },
            { image: '/images/projects/snowden-creek/snowden-creek-4.jpg' },
            { image: '/images/projects/snowden-creek/snowden-creek-5.jpg' },
          ],
          href: '#snowden-creek',
        },
        {
          id: 4,
          title: 'Murraygate Village',
          location: '7800 Belford Dr, Alexandria, VA 22306',
          scope:
            "This large-scale occupied renovation involves the systematic replacement of fan coil units with split systems across 200 residential apartments. We are performing this work on a phased schedule to minimize disruption to tenants while providing a complete upgrade to the building's hydronic heating and cooling systems.",
          image: '/images/projects/murraygate-village/murraygate-village-1.jpg',
          images: [
            { image: '/images/projects/murraygate-village/murraygate-village-1.jpg' },
          ],
          href: '#murraygate-village',
        },
        {
          id: 5,
          title: 'Lacy Court',
          location: '8 W Nelson Ave, Alexandria, VA 22301',
          scope:
            'HVAC and plumbing system modernization. Remington performed a full mechanical retrofit of the existing systems, replacing older boilers and cooling units with contemporary HVAC technology and updating domestic water piping to meet current building and energy codes.',
          image: '/images/projects/lacy-court/lacy-court-1.jpg',
          images: [
            { image: '/images/projects/lacy-court/lacy-court-1.jpg' },
            { image: '/images/projects/lacy-court/lacy-court-2.jpg' },
            { image: '/images/projects/lacy-court/lacy-court-3.jpg' },
          ],
          href: '#lacy-court',
        },
        {
          id: 6,
          title: 'Oakwood Senior',
          location: '5110 South Lakes Dr, Reston, VA 20191',
          scope:
            'Newly constructed Earthcraft project consisting of 150 apartments. The installation included a total of 163 units, comprised of Trane split system heat pumps and ductless split systems, along with DOAS and ductwork.',
          image: PROJECT_PLACEHOLDER,
          href: '#oakwood-senior',
        },
        {
          id: 7,
          title: '923 V Street',
          location: '923 V St NW, Washington, DC 20001',
          scope:
            'The scope involved the installation of high-end mechanical systems for residential units and ground-floor retail space, including modern HVAC solutions typical of new multi-family luxury builds in the U Street Corridor.',
          image: PROJECT_PLACEHOLDER,
          href: '#923-v-street',
        },
        {
          id: 8,
          title: '4111 Kansas Ave',
          location: '4111 Kansas Ave NW, Washington, DC 20011',
          scope: '',
          image: PROJECT_PLACEHOLDER,
          href: '#4111-kansas-ave',
        },
        {
          id: 9,
          title: '1910 University Senior',
          location: '1910 University Blvd W, Silver Spring, MD 20902',
          scope:
            'New 90-unit apartment building. The project involved providing new split system AC units, DOAS, and duct systems. Worked on the project with Davis Construction.',
          image: PROJECT_PLACEHOLDER,
          href: '#1910-university-senior',
        },
        {
          id: 10,
          title: 'Little River Glen 4',
          location: '9231 Little River Tpke, Fairfax, VA 22031',
          scope:
            'Remington Construction is leading the mechanical development for this 60-apartment senior living community, partnering with Southway Builders. The scope involves the installation of energy-efficient Carrier HVAC systems designed to meet EarthCraft green building standards.',
          image: PROJECT_PLACEHOLDER,
          href: '#little-river-glen-4',
        },
        {
          id: 11,
          title: 'Avonlea',
          location: '25159 Avonlea Dr, Chantilly, VA 20152',
          scope:
            'This project features the installation of high-efficiency mini-split systems for a new 130-unit residential development in Chantilly. The mechanical design is optimized to provide individualized climate control while maintaining a low carbon footprint across the multi-building site.',
          image: PROJECT_PLACEHOLDER,
          href: '#avonlea',
        },
        {
          id: 12,
          title: '1201 Abbington',
          location: '1201 Abbington Dr, Alexandria, VA 22306',
          scope:
            'This ambitious office-to-residential conversion involves the mechanical build-out of 143 modern apartments in Alexandria. Our team is responsible for the complete integration of new HVAC and plumbing infrastructure within the existing structural framework to support its new life as a high-density residence.',
          image: '/images/projects/1201-abbington/1201-abbington-1.jpg',
          images: [
            { image: '/images/projects/1201-abbington/1201-abbington-1.jpg' },
            { image: '/images/projects/1201-abbington/1201-abbington-2.jpg' },
          ],
          href: '#1201-abbington',
        },
        {
          id: 13,
          title: 'Macomb House',
          location: '2710 Macomb Street NW, Washington, DC 20008',
          scope:
            'Replacement of existing 2-pipe fan coil units with Mitsubishi VRF systems for 92 apartments, totaling 102 indoor units. The scope included associated electrical and plumbing work, with walls and ceilings restored after installation.',
          image: '/images/projects/macomb-house/macomb-house-1.jpg',
          images: [
            { image: '/images/projects/macomb-house/macomb-house-1.jpg' },
          ],
          href: '#macomb-house',
        },
        {
          id: 14,
          title: 'Marywood Apartments',
          location: '10700 Crestwood Dr, Manassas, VA 20109',
          scope:
            'Remington is currently managing a major mechanical upgrade for this 90-unit occupied facility in Manassas. The project scope centers on the strategic replacement of existing PTAC units with updated, high-performance systems while ensuring continuous comfort for the senior residents during the transition.',
          image: PROJECT_PLACEHOLDER,
          href: '#marywood-apartments',
        },
        {
          id: 15,
          title: 'Forest Glen',
          location: '2106 Belvedere Blvd, Silver Spring, MD 20902',
          scope:
            'Replacement of 217 split systems in occupied apartments. The project included new hot water PPR piping distribution, boilers, and hot water heaters with storage tanks. Additionally, all domestic hot and cold water piping was replaced, along with kitchen sinks, lavatories, and toilets in all 217 units.',
          image: '/images/projects/forest-glen/forest-glen-1.jpg',
          images: [
            { image: '/images/projects/forest-glen/forest-glen-1.jpg' },
            { image: '/images/projects/forest-glen/forest-glen-2.jpg' },
            { image: '/images/projects/forest-glen/forest-glen-3.jpg' },
          ],
          href: '#forest-glen',
        },
        {
          id: 16,
          title: 'Virginian Senior Living',
          location: '9229 Arlington Blvd, Fairfax, VA 22031',
          scope:
            'This extensive renovation project served a 400+ unit occupied senior living facility, requiring meticulous coordination to maintain resident comfort. The mechanical scope centered on the installation of a cutting-edge Daikin Variable Refrigerant Flow (VRF) system to provide superior energy efficiency and individualized climate control.',
          image: PROJECT_PLACEHOLDER,
          href: '#virginian-senior-living',
        },
        {
          id: 17,
          title: 'Masonry Loft',
          location: '515 N Washington St, Alexandria, VA 22314',
          scope: '',
          image: PROJECT_PLACEHOLDER,
          href: '#masonry-loft',
        },
        {
          id: 18,
          title: '3400 Pike',
          location: '3400 Columbia Pike, Arlington, VA 22204',
          scope:
            'Renovation of an existing 257-unit apartment building. The project required the demo of the existing VRF system and the installation of 308 new AC indoor and outdoor split system units. New risers were run from the condensers on the roof to the indoor units.',
          image: '/images/projects/3400-pike/3400-pike-1.jpg',
          images: [
            { image: '/images/projects/3400-pike/3400-pike-1.jpg' },
            { image: '/images/projects/3400-pike/3400-pike-2.jpg' },
            { image: '/images/projects/3400-pike/3400-pike-3.jpg' },
          ],
          href: '#3400-pike',
        },
        {
          id: 19,
          title: 'Fairlawn Marshal',
          location: '2834 Q St SE, Washington, DC 20020',
          scope: '',
          image: PROJECT_PLACEHOLDER,
          href: '#fairlawn-marshal',
        },
      ],
    },
    {
      id: 2,
      name: 'Government',
      projects: [
        {
          id: 1,
          title: 'Joint Base Anacostia Bolling',
          location: '256 McGuire Ave, Washington, DC 20373',
          scope:
            'Remington provided the mechanical installation for a 30-room dormitory, featuring the deployment of a high-performance 4-pipe fan coil system. This project required strict adherence to military facility standards, delivering precise climate control for unaccompanied Airmen housing.',
          image: PROJECT_PLACEHOLDER,
          href: '#joint-base-anacostia-bolling',
          showViewMore: true,
        },
        {
          id: 2,
          title: 'NGIS',
          location: 'Mayport Naval Station Jacksonville, FL',
          scope:
            'Our team managed the mechanical scope for this 143-room Navy Gateway Inns & Suites (NGIS) facility in Florida. The installation included state-of-the-art LG VRF systems and Dedicated Outdoor Air Systems (DOAS) to ensure optimal humidity control and air quality in a coastal environment.',
          image: PROJECT_PLACEHOLDER,
          href: '#ngis',
        },
        {
          id: 3,
          title: 'US Coast Guard',
          location: 'Fort Myers, FL',
          scope:
            'We delivered a full-scale mechanical plant upgrade for this Coast Guard station, including the installation of new chillers, boilers, and fan coil units. The project was designed to provide robust and redundant climate control capable of withstanding the demanding Florida climate.',
          image: PROJECT_PLACEHOLDER,
          href: '#us-coast-guard',
        },
        {
          id: 4,
          title: 'CDC Rivanna',
          location: '',
          scope:
            'Remington is responsible for the mechanical systems at this new childcare center, which includes the installation of high-efficiency boiler and cooling systems. The scope prioritizes safety and precise temperature regulation to create a healthy environment for children and staff.',
          image: PROJECT_PLACEHOLDER,
          href: '#cdc-rivanna',
        },
        {
          id: 5,
          title: 'Nokesville Fire Dept',
          location: '',
          scope: '',
          image: '/images/projects/nokesville-fire-dept/nokesville-fire-dept-1.jpg',
          images: [
            { image: '/images/projects/nokesville-fire-dept/nokesville-fire-dept-1.jpg' },
            { image: '/images/projects/nokesville-fire-dept/nokesville-fire-dept-2.jpg' },
          ],
          href: '#nokesville-fire-dept',
        },
        {
          id: 6,
          title: 'VDOT Manassas',
          location: '',
          scope: '',
          image: '/images/projects/vdot-manassas/vdot-manassas-1.jpg',
          images: [
            { image: '/images/projects/vdot-manassas/vdot-manassas-1.jpg' },
            { image: '/images/projects/vdot-manassas/vdot-manassas-2.jpg' },
          ],
          href: '#vdot-manassas',
        },
        {
          id: 7,
          title: 'Wellington Operation Center',
          location: '',
          scope:
            'Remington Construction delivered specialized mechanical solutions for this Loudoun County maintenance facility, including the installation of high-volume, low-speed (HVLS) "Big Ass Fans" to optimize airflow. The project also involved the integration of gas-fired infrared heating systems to provide energy-efficient, targeted warmth within the industrial workspace.',
          image: PROJECT_PLACEHOLDER,
          href: '#wellington-operation-center',
        },
        {
          id: 8,
          title: 'Russian Embassy',
          location: '2650 Wisconsin Ave NW, Washington, DC 20007',
          scope:
            "This high-profile project involved the installation of a massive 2,750-ton water-cooled chiller plant and three industrial boilers. Our team handled the complex mechanical logistics required to support the extensive climate control needs of the embassy's residential and administrative wings.",
          image: '/images/projects/russian-embassy/russian-embassy-1.jpg',
          images: [
            { image: '/images/projects/russian-embassy/russian-embassy-1.jpg' },
          ],
          href: '#russian-embassy',
        },
      ],
    },
    {
      id: 3,
      name: 'Hospitality',
      projects: [
        {
          id: 1,
          title: 'Casa Marina',
          location: '1500 Reynolds St, Key West, FL 33040',
          scope:
            'Renovation of an existing 311-unit hotel, including guest rooms and public spaces. The work involved replacing existing chilled water fan coils, DOAS units, and duct systems.',
          image: PROJECT_PLACEHOLDER,
          href: '#casa-marina',
          showViewMore: true,
        },
        {
          id: 2,
          title: 'Postcard Inn',
          location: '84001 Overseas Hwy, Islamorada, FL 33036',
          scope:
            'Located in Islamorada, this project involved the replacement of 124 PTAC units with modern, quiet, and efficient mini-split systems. This mechanical upgrade was part of a larger resort transformation aimed at enhancing guest comfort while reducing overall energy consumption.',
          image: PROJECT_PLACEHOLDER,
          href: '#postcard-inn',
        },
        {
          id: 3,
          title: 'Hilton Anatole',
          location: '2201 N Stemmons Fwy, Dallas, TX 75207',
          scope:
            'Remington executed a massive plumbing modernization for this iconic Dallas hotel, replacing fixtures in 422 guest rooms and replacing water risers. The project was carefully coordinated to maintain hotel operations while significantly improving water efficiency and guest experience.',
          image: PROJECT_PLACEHOLDER,
          href: '#hilton-anatole',
        },
        {
          id: 4,
          title: 'Grand Hyatt DFW',
          location: '2337 S International Pkwy, DFW Airport, TX 75261',
          scope:
            'This comprehensive renovation included the replacement of mechanical systems in public spaces and guest rooms at the DFW Airport. We updated the rooftop units and guest room climate controls to meet the latest Hyatt brand standards and improve operational efficiency.',
          image: '/images/projects/grand-hyatt-dfw/grand-hyatt-dfw-1.jpg',
          images: [
            { image: '/images/projects/grand-hyatt-dfw/grand-hyatt-dfw-1.jpg' },
            { image: '/images/projects/grand-hyatt-dfw/grand-hyatt-dfw-2.jpg' },
          ],
          href: '#grand-hyatt-dfw',
        },
        {
          id: 5,
          title: 'Residence Inn - Dupont Circle',
          location: '2120 P St. NW, Washington, DC 20037',
          scope:
            'Our team performed a full plumbing fixture replacement across this high-traffic Washington, DC hotel. This upgrade focused on luxury aesthetic improvements and the installation of low-flow technology to meet modern sustainability goals.',
          image: '/images/projects/residence-inn-dupont/residence-inn-dupont-1.jpg',
          images: [
            { image: '/images/projects/residence-inn-dupont/residence-inn-dupont-1.jpg' },
          ],
          href: '#residence-inn-dupont',
        },
        {
          id: 6,
          title: 'Staybridge Suites',
          location: '50 Ponce de Leon St, Miramar Beach, FL 32550',
          scope:
            "The scope included the deployment of Vtech in-room units for localized guest comfort, complemented by a high-efficiency Hitachi Variable Refrigerant Flow (VRF) system dedicated to the hotel's common areas.",
          image: PROJECT_PLACEHOLDER,
          href: '#staybridge-suites',
        },
        {
          id: 7,
          title: 'Holiday Inn',
          location: '1240 West University Ave, Gainesville, FL 32601',
          scope:
            'We managed the replacement of in-room fan coil units and public space HVAC systems for this 144-room hotel near the University of Florida. The project ensured a modernized guest experience with quieter operation and more responsive temperature control.',
          image: '/images/projects/holiday-inn/holiday-inn-1.jpg',
          images: [
            { image: '/images/projects/holiday-inn/holiday-inn-1.jpg' },
            { image: '/images/projects/holiday-inn/holiday-inn-2.jpg' },
            { image: '/images/projects/holiday-inn/holiday-inn-3.jpg' },
          ],
          href: '#holiday-inn',
        },
        {
          id: 8,
          title: 'Courtyard by Marriott',
          location: '638 Hillsdale Drive, Charlottesville, VA 22901',
          scope:
            "Remington Construction spearheaded a comprehensive mechanical renovation of the hotel's public spaces and indoor pool facilities. The project featured the expert installation of a state-of-the-art Hitachi VRF system, specifically engineered to provide high-efficiency climate control and superior dehumidification for the aquatic environment.",
          image: PROJECT_PLACEHOLDER,
          href: '#courtyard-by-marriott',
        },
        {
          id: 9,
          title: 'ION Training Center',
          location: 'Leesburg, VA',
          scope:
            'Remington Construction served as a key mechanical partner for the 90,000-square-foot Ion International Training Center, managing the project from initial design through to the ribbon-cutting ceremony. Our team engineered an innovative dual-use cooling system utilizing ice rink coolant for occupied spaces and successfully installed condensing boilers, heat-recovery tanks, and water-to-water heat exchangers within an accelerated five-month timeline.',
          image: '/images/projects/ion-training-center/ion-training-center-1.jpg',
          images: [
            { image: '/images/projects/ion-training-center/ion-training-center-1.jpg' },
            { image: '/images/projects/ion-training-center/ion-training-center-2.jpg' },
            { image: '/images/projects/ion-training-center/ion-training-center-3.jpg' },
          ],
          href: '#ion-training-center',
        },
      ],
    },
  ],
} as const;

export const WHY_CHOOSE_US_CONTENT = {
  heading: 'Why Choose Us',
  intro: 'We provide our clients with valuable expertise, high quality service and cutting-edge technology and materials for all your building maintenance and construction needs. We specialize in multi-family, commercial, industrial, institutional, educational and medical market sectors throughout the nation. We deliver exceptional value based on our three core beliefs.',
  features: [
    {
      id: 1,
      imageSrc: '/images/choose/value.png',
      imageAlt: 'Value Engineering',
      title: 'Value Engineering',
      description: 'Our project team is highly skilled in finding creative ways to reduce costs while maintaining quality, function, and aesthetics. When applied to the construction process, value engineering has enormous benefits for the developers. Not only a cost-saving measure but also a valued project management technique, value engineering addresses all aspects of building lifecycle from the initial construction through the sustainability of sourced materials and utility efficiency of the final project.',
    },
    {
      id: 2,
      imageSrc: '/images/choose/cycle.png',
      imageAlt: 'Service When You Need It',
      title: 'Service When You Need It',
      description: 'We reply to inquiries promptly! We include personalized service and a timely turnaround into every project we are a part of. Starting with estimating, we give you an accurate understanding of the project costs. We believe that it is our job to not just deliver successful outcomes, but also a smooth, enjoyable process that respects project owners\' investments. Our integrity and professionalism enable us to provide unsurpassed accountability for every client.',
    },
    {
      id: 3,
      imageSrc: '/images/choose/metrics.png',
      imageAlt: 'Innovation & Sustainability',
      title: 'Innovation & Sustainability',
      description: 'We embrace the newest technological developments in our industry and offer our clients superior products that make their projects safer, more energy efficient, offer extended life span and provide greater environmental sustainability. Remington is dedicated to becoming the leader in embracing those technologies that help our clients meet and exceed building and energy codes for multi-family and commercial buildings.',
    },
  ],
} as const;

export const CONTACT_CONTENT = {
  heading: 'Tell Us About Your Project',
  subheading: 'Have questions? Fill the formular and we will write you as soon as we can!',
  contactInfo: [
    {
      id: 1,
      icon: 'phone',
      label: 'Phone',
      value: '(703) 992-0909',
      href: 'tel:+17039920909',
    },
    {
      id: 2,
      icon: 'printer',
      label: 'Fax',
      value: '(703) 992-9912',
      href: 'tel:+17039929912',
    },
    {
      id: 3,
      icon: 'map-pin',
      label: 'Address',
      value: '8466-B Tyco Road Vienna, VA 22182',
      href: 'https://maps.google.com/?q=8466-B+Tyco+Road+Vienna+VA+22182',
    },
    {
      id: 4,
      icon: 'mail',
      label: 'Mail',
      value: 'info@remingtondc.com',
      href: 'mailto:info@remingtondc.com',
    },
  ],
} as const;

export const COPYRIGHT = `© Copyright 2026 Remington Construction. All rights reserved.`;
