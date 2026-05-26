const productDetails = {
  "ups-charger": {
    category: "Power Protection",
    title: "CHLORIDE - AC UPS & DC CHARGER",
    description: "Produk AC UPS dan DC Charger untuk kebutuhan industri yang membutuhkan suplai daya stabil, sistem proteksi, serta perangkat yang mudah dirawat.",
    sections: [
      {
        title: "Detail Produk",
        items: [
          "Industrial Type SCR Technology",
          "Design life for 30 years and resistant to H2S atmosphere",
          "Custom design as requested",
          "Easy maintenance and replace sparepart",
          "Intuitive Human-Machine Interface (HMI) touchscreen display",
          "Smart parallel system"
        ]
      }
    ]
  },
  "smc-batteries": {
    category: "Battery System",
    title: "CHLORIDE - SODIUM METAL BATTERIES (SMC)",
    description: "Sistem baterai sodium metal yang dirancang untuk kebutuhan daya industri dengan umur pakai panjang, efisiensi ruang, dan ketahanan lingkungan yang baik.",
    sections: [
      {
        title: "Detail Produk",
        items: [
          "Safe cost",
          "Zero emissions and zero maintenance",
          "Design life 20 years",
          "Smart battery monitoring system",
          "Space optimization",
          "Environmental resistance",
          "Power availability with no dedicated room needed",
          "Temperature up to 60°C"
        ]
      }
    ]
  },
  "alps-das-sbi": {
    category: "Lightning Protection",
    title: "ALPS DAS & SBI (ADVANCED LIGHTNING PROTECTION SYSTEM)",
    description: "Sistem proteksi petir lanjutan untuk meningkatkan keamanan personel, menjaga aset, serta mendukung keberlanjutan operasional fasilitas.",
    sections: [
      {
        title: "Detail Produk",
        items: [
          "Enhanced personnel safety",
          "Most cost effective system for critical facilities",
          "Protects client’s Return-on-Investment for asset or facility",
          "Better assurance for client’s business and operation continuity",
          "Effective protection applicable for asset, facility, or large area protection",
          "Best protection option for sensitive electronics from lightning induced EMP"
        ]
      }
    ]
  },
  "shoremaster": {
    category: "Frequency Converter",
    title: "FREQUENCY CONVERTER SHOREMASTER UP TO 8MW",
    description: "The ShoreMaster is EnSmart’s fully integrated dock side shore-to-ship power supply solution designed to help reduce emissions in ports by enabling ships to shut down diesel generators and connect to the port electricity grid while berthed.",
    sections: [
      {
        title: "All-in-One Reliable Shore Power Supply",
        items: [
          "Plug-in-Play containerized IP65 solution",
          "Equipped and pre-assembled with high quality power components",
          "Scalable from a hundred kWs to 8 MW tailored to port traffic needs",
          "Continuous power quality and safety",
          "50Hz to 60Hz conversion for differing port and ship frequencies"
        ]
      },
      {
        title: "Highest Flexibility",
        items: [
          "Can be installed in an existing equipment room",
          "Can be built in a HVAC container or an outdoor enclosure",
          "Support LV 400V, 690V or MV 6.6kV, 11kV power distribution",
          "Active Front End (AFE) option",
          "Emergency energy storage is available for energy during micro power outage"
        ]
      },
      {
        title: "Advanced Power Technology",
        items: [
          "State-of-the-art IGBT technology with DSP control",
          "Ultra high overall efficiency 96%",
          "Maximum Marine Power (PF 0.9 and PF 1 for kW = kVA)",
          "Wide selection of alarms, indications, and measurements",
          "Powerful SCADA and HMI systems",
          "Advanced connectivity options: RS232, RS485, MOD-Bus, J-Bus, Web, TelNet, GPRS, CAN-Bus, and SNMP"
        ]
      }
    ]
  },
  "smart-fc": {
    category: "Frequency Converter",
    title: "SMART FC 10 - 1000 KVA FREQUENCY CONVERTER 50HZ 60HZ",
    description: "Frequency converter untuk menjaga kestabilan frekuensi dan tegangan pada aplikasi portside, shore-to-ship, serta kebutuhan daya marine.",
    sections: [
      {
        title: "Detail Produk",
        items: [
          "Stable regulated frequency and voltage",
          "Protection for portside applications (shore to ship)",
          "Plug and play power for the ships at berth",
          "Protection from shore supply faults",
          "Fully galvanic isolated output supply",
          "With active front-end technology for maximum power transfer from shore supply to yacht",
          "Protects sensitive all on-board marine equipment from voltage distortion, voltage sags, or frequency instability",
          "Customized IP21 to IP42 or outdoor IP66 enclosures and containerized systems"
        ]
      }
    ]
  },
  "smartess1000": {
    category: "Energy Storage",
    title: "INDUSTRIAL ENERGY STORAGE SYSTEM SMARTESS1000 1000KW/2000KWH",
    description: "Smart ESS 1000 is an all-in-one containerized ESS designed for small C&I loads. The system integrates battery, BMS, PCS, HVAC, fire extinguishing system, and EMS systems. It can meet battery storage requirements up to 2026kWh.",
    sections: [
      {
        title: "Integrated",
        items: [
          "Modular Hybrid PCS",
          "7.68kWh (1C) safest LiFePO4 battery modules",
          "Intelligent BMS",
          "Energy Management System and MasterSite Controller",
          "IP54 outdoor cabinet with fire suppression and HVAC system"
        ]
      },
      {
        title: "Flexible",
        items: [
          "Wide Battery DC Voltage Range",
          "Modular design easy expansion up to 10 units in parallel",
          "Optimized for both on-grid and off-grid (island mode) applications",
          "Easy installation and maintenance",
          "Various applications such as peak shaving, frequency regulation, EV Charging, Solar + Storage, Micro-Grid, and Self Consumption Optimization"
        ]
      },
      {
        title: "Reliable",
        items: [
          "Antiseismic and more than 25 years design life",
          "Maximum safety utilizing Tier 1 lithium battery cells",
          "Long lifespan with over 10000 cycles and 15 years design life"
        ]
      }
    ]
  }
};

const modal = document.getElementById("productModal");
const modalClose = document.getElementById("modalClose");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalDetails = document.getElementById("modalDetails");
const detailButtons = document.querySelectorAll(".detail-button");

function buildProductDetail(product) {
  return product.sections.map(section => {
    const items = section.items.map(item => `<li>${item}</li>`).join("");
    return `
      <div class="modal-section">
        <h4>${section.title}</h4>
        <ul>${items}</ul>
      </div>
    `;
  }).join("");
}

function openProductModal(productKey) {
  const product = productDetails[productKey];
  if (!product) return;

  modalCategory.textContent = product.category;
  modalTitle.textContent = product.title;
  modalDescription.textContent = product.description;
  modalDetails.innerHTML = buildProductDetail(product);

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

detailButtons.forEach(button => {
  button.addEventListener("click", () => openProductModal(button.dataset.product));
});

modalClose.addEventListener("click", closeProductModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeProductModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closeProductModal();
  }
});
