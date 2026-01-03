const araclar = {
  doblo: {
    2018: {
      "1.3 Multijet 95 HP": {
        "0-20.000": 2800,
        "20.000-40.000": 3900,
        "40.000+": 5200
      },
      "1.6 Multijet 105 HP": {
        "0-20.000": 3200,
        "20.000-40.000": 4400,
        "40.000+": 5800
      }
    },
    2019: {
      "1.3 Multijet 95 HP": {
        "0-20.000": 3000,
        "20.000-40.000": 4200,
        "40.000+": 5600
      }
    },
    2020: {
      "1.3 Multijet 95 HP": {
        "0-20.000": 3200,
        "20.000-40.000": 4500,
        "40.000+": 5900
      }
    }
  },

  egea: {
    2018: {
      "1.4 Fire 95 HP": {
        "0-15.000": 2600,
        "15.000-30.000": 3700,
        "30.000+": 5000
      },
      "1.6 Multijet 120 HP": {
        "0-15.000": 3100,
        "15.000-30.000": 4300,
        "30.000+": 5800
      }
    },
    2020: {
      "1.0 Firefly Turbo 100 HP": {
        "0-15.000": 2900,
        "15.000-30.000": 4100,
        "30.000+": 5600
      },
      "1.6 Multijet 130 HP": {
        "0-15.000": 3300,
        "15.000-30.000": 4600,
        "30.000+": 6100
      }
    },
    2022: {
      "1.5 Hybrid 130 HP": {
        "0-15.000": 3600,
        "15.000-30.000": 5000,
        "30.000+": 6600
      }
    }
  },

  fiorino: {
    2017: {
      "1.3 Multijet 75 HP": {
        "0-20.000": 2400,
        "20.000-40.000": 3400,
        "40.000+": 4700
      }
    },
    2019: {
      "1.3 Multijet 95 HP": {
        "0-20.000": 2700,
        "20.000-40.000": 3800,
        "40.000+": 5100
      }
    },
    2021: {
      "1.3 Multijet 95 HP": {
        "0-20.000": 3000,
        "20.000-40.000": 4200,
        "40.000+": 5600
      }
    }
  },

  ducato: {
    2018: {
      "2.3 Multijet 130 HP": {
        "0-30.000": 5200,
        "30.000-60.000": 7200,
        "60.000+": 9500
      }
    },
    2020: {
      "2.3 Multijet 160 HP": {
        "0-30.000": 5800,
        "30.000-60.000": 8000,
        "60.000+": 10500
      }
    },
    2022: {
      "2.2 Multijet 180 HP": {
        "0-30.000": 6200,
        "30.000-60.000": 8500,
        "60.000+": 11200
      }
    }
  },

  scudo: {
    2021: {
      "1.5 BlueHDi 120 HP": {
        "0-30.000": 4800,
        "30.000-60.000": 6600,
        "60.000+": 8800
      },
      "2.0 BlueHDi 145 HP": {
        "0-30.000": 5200,
        "30.000-60.000": 7200,
        "60.000+": 9500
      }
    },
    2023: {
      "2.0 BlueHDi 180 HP": {
        "0-30.000": 5800,
        "30.000-60.000": 8000,
        "60.000+": 10400
      }
    }
  }
};

// MODEL → YIL
function modelDegisti() {
  const model = document.getElementById("model").value;
  const yilSelect = document.getElementById("modelYear");
  const motorSelect = document.getElementById("motor");
  const kmSelect = document.getElementById("km");

  yilSelect.innerHTML = `<option value="">Seçiniz</option>`;
  motorSelect.innerHTML = `<option value="">Önce model yılı seçin</option>`;
  kmSelect.innerHTML = `<option value="">Önce motor seçin</option>`;

  if (!model) return;

  Object.keys(araclar[model]).forEach(yil => {
    yilSelect.innerHTML += `<option value="${yil}">${yil}</option>`;
  });
}

// YIL → MOTOR
function yilDegisti() {
  const model = document.getElementById("model").value;
  const yil = document.getElementById("modelYear").value;
  const motorSelect = document.getElementById("motor");
  const kmSelect = document.getElementById("km");

  motorSelect.innerHTML = `<option value="">Seçiniz</option>`;
  kmSelect.innerHTML = `<option value="">Önce motor seçin</option>`;

  if (!model || !yil) return;

  Object.keys(araclar[model][yil]).forEach(motor => {
    motorSelect.innerHTML += `<option value="${motor}">${motor}</option>`;
  });
}

// MOTOR → KM
function motorDegisti() {
  const model = document.getElementById("model").value;
  const yil = document.getElementById("modelYear").value;
  const motor = document.getElementById("motor").value;
  const kmSelect = document.getElementById("km");

  kmSelect.innerHTML = `<option value="">Seçiniz</option>`;

  if (!model || !yil || !motor) return;

  Object.keys(araclar[model][yil][motor]).forEach(km => {
    kmSelect.innerHTML += `<option value="${km}">${km}</option>`;
  });
}

// HESAPLA
function hesapla() {
  const model = document.getElementById("model").value;
  const yil = document.getElementById("modelYear").value;
  const motor = document.getElementById("motor").value;
  const km = document.getElementById("km").value;

  if (!model || !yil || !motor || !km) {
    alert("Tüm alanları seçin");
    return;
  }

  const fiyat = araclar[model][yil][motor][km];

  document.getElementById("sonuc").innerText =
    `Tahmini Servis Ücreti: \n ${fiyat} TL`;
}
