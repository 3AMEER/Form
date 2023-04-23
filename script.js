
const selectNum = document.querySelector('.selectNum');
// Add event listener to the select element
selectNum.addEventListener('change', (e) => {
const num = e.target.value; // Get the chosen number

// Clear the contents of the boxTwo div
const boxTwo = document.querySelector('.boxTwo');
boxTwo.innerHTML = '';

for (let i = 0; i < num; i++) {

    const div = document.createElement('div');
    div.style.margin = "20px"
    div.classList.add('newDiv');

    // Create the select element with car and real options
    const selectType = document.createElement('select');
    selectType.className = "SelectType";
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');
    const option4 = document.createElement('option');
    const option5 = document.createElement('option');
    const option6 = document.createElement('option');
    const option7 = document.createElement('option');
    const option8 = document.createElement('option');

    option1.text = 'أختر  القسم';
    option2.text = 'مزاد الاجهزة المنزليه الكهربائية';
    option3.text = 'مزاد الجوالات والهواتف';
    option4.text = 'مزاد السيارات والشاحنات';
    option5.text = 'مزاد المعدات الصناعية';
    option6.text = 'مزاد بضائع متنوعة';
    option7.text = 'مزاد العقارات';
    option8.text = 'مزاد أرقام الهواتف ولوحات السيارات المميزة';

    selectType.add(option1);
    selectType.add(option2);
    selectType.add(option3);
    selectType.add(option4);
    selectType.add(option5);
    selectType.add(option6);
    selectType.add(option7);
    selectType.add(option8);

    // Create the input element
    const inputElement = document.createElement('div');
    inputElement.innerHTML = `
    <div class="row">
    <div class="group">
        <label for="">اسم او عنوان المزاد</label>
        <input type="text" name="" id="" required>
    </div>

    <div class="group">
        <label for="">مبلغ الافتتاح</label>
        <input type="text" name="" id="" required>
    </div>
    </div>

    <div class="row">
        <div class="group">
            <label for="">مبلغ العربون</label>
            <input type="text" name="" id="" required>
        </div>
        <div class="group">
            <label for="">اقل مبلغ للمزايده</label>
            <input type="text" name="" id="" required>
        </div>
    </div>

    <div class="main-real row"></div>

    <div class="main-car row"></div>

    <div class="row textarea">
        <div class="group">
            <label for="">تفاصيل عن المزاد</label>
            <textarea name="" id="" cols="30" rows="6" required></textarea>
        </div>
    </div>

    <div class="row">
        <div class="group">
            <label for="">تحديد الموقع</label>
            <input type="text" name="" id="" required>
        </div>
    </div>                        
    <div class="row">
        <div class="group">
            <label for="">تحميل الصور</label>
            <input type="file" name="" id="" required>
        </div>
    </div>
    </div>
    
    `

    // Add event listener to the select element
    selectType.addEventListener('change', (e) => {
      const selectedOption = e.target.value;

      // Create a new div with the input element based on the chosen option
      const newDiv = document.createElement('div');

      const newDivForReal = document.createElement("div");

      newDivForReal.innerHTML = `
      <div class="row real-state real-state1">
      <div class="row">
                <div class="group">
                    <label class="">نوع العقار</label>
                    <select name="select" id="" size="1" required>
                        <option value="option">اختر نوع العقار</option>
                        <option value="فيلا">فيلا</option>
                        <option value="شقة">شقة</option>
                        <option value="عمارة">عمارة</option>
                        <option value="بيت شعبي">بيت شعبي</option>
                        <option value="ارض">ارض</option>
                        <option value="محل تجاري"> محل تجاري</option>
                        <option value="دور">دور</option>
                        <option value="اخرى">اخرى</option>
                    </select>
                </div>
                <div class="group">
                    <label class="">واجهة العقار</label>
                    <select name="select" id="" size="1" required>
                        <option value="واجهة شمالية">واجهة شمالية</option>
                        <option value="واجهة جنوبية">واجهة جنوبية</option>
                        <option value="واجهة غربية">واجهة غربية</option>
                        <option value="واجهة شرقية">واجهة شرقية</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="group">
                    <label for="">عمر العقار</label>
                    <input type="text" name="" id="" required>
                </div>
                <div class="group">
                    <label for="">المساحة</label>
                    <input type="text" name="" id="" required>
                </div>
            </div>
        
            <div class="row group-checkbox">
                <label for="">المزايدة بسعر</label>
                <select name="" id="">
                    <option value="">أختر المزايدة</option>
                    <option id="option1" value="1">المزايدة بسعر المتر</option>
                    <option id="option1" value="1">المزايدة بسعر اجمالي</option>
                </select>
            </div>
        </div>
      `
      const nenewDivForCar = document.createElement("div");
      nenewDivForCar.innerHTML =  `
      <div class="row cars-section cars-section1">
      <div class="row-group">
          <div class="group">
              <label class="">اختر ماركة السيارة</label>
              <select name="" id="" size="1" required>
                  <option value="ماركة السيارة">ماركة السيارة</option>
                  <option value="تويوتا"> تويوتا </option>
                  <option value="شيفروليه"> شيفروليه </option>
                  <option value="نيسان"> نيسان </option>
                  <option value="فورد"> فورد </option>
                  <option value="مرسيدس"> مرسيدس </option>
                  <option value="جي ام سي "> جي ام سي </option>
                  <option value="بي ام دبليو "> بي ام دبليو </option>
                  <option value="لكزس"> لكزس </option>
                  <option value="جيب"> جيب </option>
                  <option value="هونداي"> هونداي </option>
                  <option value="هوندا"> هوندا </option>
                  <option value="همر"> همر </option>
                  <option value="انفنيتي"> انفنيتي </option>
                  <option value="لاند روفر "> لاند روفر </option>
                  <option value="مازدا "> مازدا </option>
                  <option value="ميركوري"> ميركوري </option>
                  <option value="فولكس واجن "> فولكس واجن </option>
                  <option value="ميتسوبيشي"> ميتسوبيشي </option>
                  <option value="لنكولن"> لنكولن </option>
                  <option value="اوبل"> اوبل </option>
                  <option value="ايسوزو"> ايسوزو </option>
                  <option value="بورش"> بورش </option>
                  <option value="كيا"> كيا </option>
                  <option value="مازيراتي"> مازيراتي </option>
                  <option value="بنتلي"> بنتلي </option>
                  <option value="استون مارتن "> استون مارتن </option>
                  <option value="كاديلاك"> كاديلاك </option>
                  <option value="كرايزلر"> كرايزلر </option>
                  <option value="سيتروين"> سيتروين </option>
                  <option value="دايو"> دايو </option>
                  <option value="ديهاتسو"> ديهاتسو </option>
                  <option value="دودج"> دودج </option>
                  <option value="فيراري"> فيراري </option>
                  <option value="فيات"> فيات </option>
                  <option value="جاكوار"> جاكوار </option>
                  <option value="لامبورجيني"> لامبورجيني </option>
                  <option value="رولز رويس"> رولز رويس </option>
                  <option value="بيجو"> بيجو </option>
                  <option value="سوبارو"> سوبارو </option>
                  <option value="سوزوكي"> سوزوكي </option>
                  <option value="فولفو"> فولفو </option>
                  <option value="سكودا"> سكودا </option>
                  <option value="اودي"> اودي </option>
                  <option value="رينو"> رينو </option>
                  <option value="بيوك"> بيوك </option>
                  <option value="ساب"> ساب </option>
                  <option value="سيات"> سيات </option>
                  <option value="MG"> MG </option>
                  <option value="بروتون"> بروتون </option>
                  <option value="سانج يونج "> سانج يونج </option>
                  <option value="تشيري"> تشيري </option>
                  <option value="جيلي"> جيلي </option>
                  <option value="ZXAUTO"> ZXAUTO </option>
                  <option value="شانجان">  شانجان </option>
                  <option value="هافال"> هافال </option>
                  <option value="جي ايه سي GAC "> جي ايه سي GAC </option>
                  <option value="فاو FAW"> فاو FAW </option>
                  <option value=" جريت وول Great Wall"> جريت وول Great Wall </option>
                  <option value=" دبابات  قطع غيار وملحقات"> دبابات  قطع غيار وملحقات </option>
                  <option value="شاحنات ومعدات ثقيلة "> شاحنات ومعدات ثقيلة </option>
              </select>
          </div>
          <div class="group">
              <label class="">اختر الموديل</label>
              <select name="" id="" size="1" required>
                  <option value="">الموديل</option>
              </select>
          </div>
          <div class="group">
              <label class="">سنة الصنع</label>
              <select name="" id="" size="1" required>
                  <option value="">سنة الصنع</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
              </select>
          </div>
      </div>
      <div class="row-group">
          <div class="group">
              <label class="">ناقل الحركة</label>
              <select name="" id="" size="1" required>
                  <option value="ناقل الحركة">ناقل الحركة</option>
                  <option value="يدوي ">يدوي </option>
                  <option value="الاتوماتيكي">الاتوماتيكي</option>
                  <option value="الاتسيب ترونيك">الاتسيب ترونيك </option>
              </select>
          </div>
          <div class="group">
              <label class="">الوقود</label>
              <select name="" id="" size="1" required>
                  <option value="الوقود">الوقود</option>
                  <option value="بنزين">بنزين</option>
                  <option value="ديزل">ديزل</option>
                  <option value="كهرباني ( بانزين + كهربائي)">كهرباني ( بانزين + كهربائي)</option>
              </select>
          </div>
          <div class="group">
              <label class="">عدد الأبواب</label>
              <select name="" id="" size="1" required>
                  <option value="">عدد الأبواب</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
              </select>
          </div>
      </div>
      <div class="row-group">
          <div class="group">
              <label class="">نوع المفتاح</label>
              <select name="" id="" size="1" required>
                  <option value="نوع المفتاح">نوع المفتاح</option>
                  <option value="مفتاح ريموت">مفتاح ريموت</option>
                  <option value="مفتاح">مفتاح </option>
              </select>
          </div>
          <div class="group">
              <label class="">رقم الشاصي</label>
              <input type="text" name="" id="" required>
          </div>
          <div class="group">
              <label class="">رقم المحرك</label>
              <input type="text" name="" id="">
          </div>
      </div>
      <div class="row-group">
          <div class="group">
              <label class="">كيلومتر</label>
              <input type="text" name="" id="" required>
          </div>
          <div class="group">
              <label class="">اللون الخارجي</label>
              <input class="color" type="color" name="" id="" required>
          </div>
          <div class="group">
              <label class="">اللون الداخلي</label>
              <input class="color" type="color" name="" id="" required>
          </div>
      </div>
  </div>
      `

      if (selectedOption === 'مزاد السيارات والشاحنات') {
        newDiv.classList.add('carDiv');
        newDiv.appendChild(nenewDivForCar);

      } else if (selectedOption === 'مزاد العقارات') {
        newDiv.classList.add('realDiv');
        newDiv.appendChild(newDivForReal);
      }


      // Add the new div to the boxTwo div
      div.appendChild(newDiv);
    });

    // Add the select and input elements to the new div
    div.appendChild(selectType);
    div.appendChild(inputElement);

    // Add the new div to the boxTwo div
    boxTwo.appendChild(div);
    let form = document.querySelector("form");
    form.appendChild(boxTwo)

  }
});

