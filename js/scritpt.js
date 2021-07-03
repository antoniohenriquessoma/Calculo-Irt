const view = document.querySelector(".view")
const irt = document.querySelector(".irt")


view.style.display = 'none';

irt.style.display = 'none';

function clicou() {

  if (forms.answer.value == "") {
    alert("Digite o seu Salário Liquido")
  } else {
    salaryGross = +forms.answer.value;
   console.log(salaryGross);
    if (salaryGross <= 70000) {
      ss = salaryGross * 0.03
      VDSS = salaryGross - ss;
      view.style.display = 'block';
      view.innerHTML = `${ss}`
      console.log(`Valor da Segurança Social é ${ss}`);
    }else {
      if (salaryGross >= 70001 && salaryGross <= 100000) {
        //Seguranca social
        ss = salaryGross * 0.03
        VDSS = salaryGross - ss;
        view.style.display = 'block';
        view.innerHTML = `${ss}`
       // console.log(`Valor da Segurança Social é ${ss}`);
        //irt
        fixedInstallment = 3000;
        tax = 0.10;
        excess = 70000;
        valueExcess = VDSS - excess;
        deduction = valueExcess * tax;
        deductionIrt = deduction + fixedInstallment;
        takeHomePay = salaryGross - deductionIrt;
        irt.style.display = 'block';
        irt.innerHTML = `${takeHomePay}`
       // console.log(`Fazes parte do 2 Escalão seu salario é ${takeHomePay}`);
      }
      if (salaryGross >= 100001 && salaryGross <= 150000) {
        //Seguranca social
        ss = salaryGross * 0.03
        VDSS = salaryGross - ss;
        view.style.display = 'block';
        view.innerHTML = `${ss}`
       // console.log(`Valor da Segurança Social é ${ss}`);
        //irt
        fixedInstallment = 6000;
        tax = 0.13;
        excess = 100000;
        valueExcess = VDSS - excess;
        deduction = valueExcess * tax;
        deductionIrt = deduction + fixedInstallment;
        takeHomePay = salaryGross - deductionIrt;
        console.log(`Fazes parte do 3 Escalão seu salario é ${takeHomePay}`);
      }
      if (salaryGross >= 1500001 && salaryGross <= 200000) {
        //Seguranca social
        ss = salaryGross * 0.03
        VDSS = salaryGross - ss;
        view.style.display = 'block';
        view.innerHTML = `${ss}`
        //console.log(`Valor da Segurança Social é ${VDSS}`);
        //irt
        fixedInstallment = 12500;
        tax = 0.16;
        excess = 150000;
        valueExcess = VDSS - excess;
        deduction = valueExcess * tax;
        deductionIrt = deduction + fixedInstallment;
        takeHomePay = salaryGross - deductionIrt;
        irt.style.display = 'block';
        irt.innerHTML = `${takeHomePay}`
       // console.log(`Fazes parte do 4 Escalão seu salario é ${takeHomePay}`);
      }
      if (salaryGross >= 200001 && salaryGross <= 300000) {
        //Seguranca social
        ss = salaryGross * 0.03
        VDSS = salaryGross - ss;
        view.style.display = 'block';
        view.innerHTML = `${ss}`
        //console.log(`Valor da Segurança Social é ${ss}`);
        //irt
        fixedInstallment = 31250;
        tax = 0.18;
        excess = 200000;
        valueExcess = VDSS - excess;
        deduction = valueExcess * tax;
        deductionIrt = deduction + fixedInstallment;
        takeHomePay = salaryGross - deductionIrt;
        //console.log(`Fazes parte do 5 Escalão seu salario é ${takeHomePay}`);
        irt.style.display = 'block';
        irt.innerHTML = `${takeHomePay}`
      }
      if (salaryGross >= 300001 && salaryGross <= 500000) {
        //Seguranca social
        ss = salaryGross * 0.03
        VDSS = salaryGross - ss;
        view.style.display = 'block';
        view.innerHTML = `${ss}`
        //console.log(`Valor da Segurança Social é ${ss}`);
        //irt
        fixedInstallment = 49250;
        tax = 0.19;
        excess = 300000;
        valueExcess = VDSS - excess;
        deduction = valueExcess * tax;
        deductionIrt = deduction + fixedInstallment;
        takeHomePay = salaryGross - deductionIrt;
       // console.log(`Fazes parte do 6 Escalão seu salario é ${takeHomePay}`);
       irt.style.display = 'block';
        irt.innerHTML = `${takeHomePay}`
      }
      if (salaryGross >= 500001 && salaryGross <= 1000000) {
        //Seguranca social
        ss = salaryGross * 0.03
        VDSS = salaryGross - ss;
        view.style.display = 'block';
        view.innerHTML = `${ss}`
      //  console.log(`Valor da Segurança Social é ${ss}`);
        //irt
        fixedInstallment = 87250;
        tax = 0.20;
        excess = 500000;
        valueExcess = VDSS - excess;
        deduction = valueExcess * tax;
        deductionIrt = deduction + fixedInstallment;
        takeHomePay = salaryGross - deductionIrt;
        //console.log(`Fazes parte do 7 Escalão seu salario é ${takeHomePay}`);
        irt.style.display = 'block';
        irt.innerHTML = `${takeHomePay}`
      }
      if (salaryGross >= 1000001 && salaryGross <= 1500000) {
        //Seguranca social
        ss = salaryGross * 0.03
        VDSS = salaryGross - ss;
        //console.log(`Valor da Segurança Social é ${ss}`);
        view.style.display = 'block';
        view.innerHTML = `${ss}`
        //irt
        fixedInstallment = 187250;
        tax = 0.21;
        excess = 1000000;
        valueExcess = VDSS - excess;
        deduction = valueExcess * tax;
        deductionIrt = deduction + fixedInstallment;
        takeHomePay = salaryGross - deductionIrt;
        //console.log(`Fazes parte do 8 Escalão seu salario é ${takeHomePay}`);
        irt.style.display = 'block';
        irt.innerHTML = `${takeHomePay}`
      }
  
      if (salaryGross >= 1500001 && salaryGross <= 2000000) {
        //Seguranca social
        ss = salaryGross * 0.03
        VDSS = salaryGross - ss;
        view.style.display = 'block';
        view.innerHTML = `${ss}`
        //console.log(`Valor da Segurança Social é ${ss}`);
        //irt
        fixedInstallment = 292000;
        tax = 0.22;
        excess = 1500000;
        valueExcess = VDSS - excess;
        deduction = valueExcess * tax;
        deductionIrt = deduction + fixedInstallment;
        takeHomePay = salaryGross - deductionIrt;
        //console.log(`Fazes parte do 9 Escalão seu salario é ${takeHomePay}`);
        irt.style.display = 'block';
        irt.innerHTML = `${takeHomePay}`
      }
      if (salaryGross >= 2000001 && salaryGross <= 2500000) {
        //Seguranca social
        ss = salaryGross * 0.03
        VDSS = salaryGross - ss;
       // console.log(`Valor da Segurança Social é ${ss}`);
       view.style.display = 'block';
        view.innerHTML = `${ss}`
        //irt
        fixedInstallment = 402250;
        tax = 0.23;
        excess = 2000000;
        valueExcess = VDSS - excess;
        deduction = valueExcess * tax;
        deductionIrt = deduction + fixedInstallment;
        takeHomePay = salaryGross - deductionIrt;
        //console.log(`Fazes parte do 10 Escalão seu salario é ${takeHomePay}`);
        irt.style.display = 'block';
        irt.innerHTML = `${takeHomePay}`
      }
      if (salaryGross >= 2500001 && salaryGross <= 5000000) {
        //Seguranca social
        ss = salaryGross * 0.03
        VDSS = salaryGross - ss;
       // console.log(`Valor da Segurança Social é ${ss}`);
       view.style.display = 'block';
        view.innerHTML = `${ss}`
        //irt
        fixedInstallment = 517250;
        tax = 0.24;
        excess = 2500000;
        valueExcess = VDSS - excess;
        deduction = valueExcess * tax;
        deductionIrt = deduction + fixedInstallment;
        takeHomePay = salaryGross - deductionIrt;
        //console.log(`Fazes parte do 11 Escalão seu salario é ${takeHomePay}`);
        irt.style.display = 'block';
        irt.innerHTML = `${takeHomePay}`
      }
  
      if (salaryGross >= 5000001 && salaryGross <= 10000000) {
        //Seguranca social
        ss = salaryGross * 0.03
        VDSS = salaryGross - ss;
        //console.log(`Valor da Segurança Social é ${ss}`);
        view.style.display = 'block';
        view.innerHTML = `${ss}`
        //irt
        fixedInstallment = 1117250;
        tax = 0.24, 5;
        excess = 5000000;
        valueExcess = VDSS - excess;
        console.log(valueExcess)
        deduction = valueExcess * tax;
        console.log(deduction);
        deductionIrt = deduction + fixedInstallment;
        takeHomePay = salaryGross - deductionIrt;
        //console.log(`Fazes parte do 12 Escalão seu salario é ${takeHomePay}`);
        irt.style.display = 'block';
        irt.innerHTML = `${takeHomePay}`
      }
      if (salaryGross > 10000001) {
        //Seguranca social
        ss = salaryGross * 0.03
        VDSS = salaryGross - ss;
       //console.log(`Valor da Segurança Social é ${ss}`);
       view.style.display = 'block';
        view.innerHTML = `${ss}`
        //irt
        fixedInstallment = 2342250;
        tax = 0.25;
        excess = 10000000;
        valueExcess = VDSS - excess;
        deduction = valueExcess * tax;
        deductionIrt = deduction + fixedInstallment;
        takeHomePay = salaryGross - deductionIrt;
        //console.log(`Fazes parte do 13 Escalão seu salario é ${takeHomePay}`);
        irt.style.display = 'block';
        irt.innerHTML = `${takeHomePay}`
      }
  
    }

  }

}

















