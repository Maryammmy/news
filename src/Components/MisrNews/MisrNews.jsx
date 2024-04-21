import React, { useState, useEffect } from 'react';
import img1 from '../../Assets/Images/142.jpg'
import img2 from '../../Assets/Images/495.jpg'
import img3 from '../../Assets/Images/825.jpg'
import img4 from '../../Assets/Images/145.webp'
import img5 from '../../Assets/Images/501.webp'
import img6 from '../../Assets/Images/127.webp'
import img7 from '../../Assets/Images/101.webp'
import img8 from '../../Assets/Images/88.webp'
const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      localeMatcher: 'best fit',
    };
    const currentDateTime = currentDate.toLocaleDateString('ar-EG', options);
    

    const newData = [
      {
        img: img1,
        title: ' حاسبات ومعلومات عين شمس تحصد المركز الأول عربيًا وأفريقيًا ببطولة البرمجة العالمية',
        description: 'شهد الدكتور عمرو طلعت وزير الاتصالات وتكنولوجيا المعلومات ختام فاعليات المسابقة الدولية ومراسم توزيع جوائز الفائزين فى البطولة التى نظمتها الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحرى.',
        dateTime: currentDateTime,
      
      },
      {
        img: img2,
        title: 'البطاطس تحتل المركز الأول في صادرات مصر الزراعية، والبصل يحل ثانيًا ',
        description: 'أصدر المركز الإعلامي للهيئة القومية لسلامة الغذاء تقريره الأسبوعي الـ 15 لعام 2024، وذلك عن الفترة من  6 - 19 إبريل، والذي تضمن العديد من الأنشطة المختلفة.',
        dateTime: currentDateTime,
      },
      {
        img: img3,
        title: ' بعد تحذير الصحة العالمية منها، هل تنتقل أنفلونزا الطيور بسهولة بين البشر؟ (فيديو)',
        description: 'قال الدكتور عبد اللطيف المر أستاذ الصحة العامة والطب الوقائي، إن تحذيرات منظمة الصحة العالمية فيما يخص إنفلونزا الطيور موجهة للعلماء والحكومات',
        dateTime: currentDateTime,
      
      },
      {
        img: img4,
        title: 'خبير تربوي يقدم إرشادات لتنظيم وقت الطلاب أثناء فترات انقطاع الكهرباء',
        description: 'قدم الدكتور تامر شوقي، أستاذ علم النفس بجامعة عين شمس، والخبير التربوي، إرشادات ونصائح للطلاب لتنظيم الوقت أثناء فترات انقطاع الكهرباء، خلال فترة المذاكرة قبل انطلاق امتحانات نهاية العام 2024.',
        dateTime: currentDateTime,
      
      },
      {
        img: img5,
        title: ' استمرار التقديم للحصول على مكافآت النشر الدولي بجامعة الأزهر حتى 16 مايو، رابط التسجيل',
        description: 'صدق الدكتور سلامة داود، رئيس جامعة الأزهر، على فتح باب التقديم لمكافآت النشر الدولي عن عام ٢٠٢٢م حتى يوم الخميس 16من مايو 2024م.',
        dateTime: currentDateTime,
      
      },
      {
        img: img6,
        title: 'الري تنتهي من دراسة بحثية لتبطين الترع بمواد صديقة للبيئة ',
        description: 'عقد الدكتور هانى سويلم وزير الموارد المائية والري اجتماعًا لمتابعة موقف الدراسة البحثية التي يقوم بها المركز القومى لبحوث المياه بشأن "تبطين الترع بإستخدام مواد صديقة للبيئة".',
        dateTime: currentDateTime,
      
      },
      {
        img: img7,
        title: 'التخطيط تعلن بدء برنامج رفع القدرات في الإدارة بالتعاون مع الهيئة العامة للتنمية الصناعية',
        description: 'أعلنت وزارة التخطيط والتنمية الاقتصادية عن بدء البرنامج التدريبي "رفع القدرات في الإدارة الاستراتيجية" بالتعاون مع الهيئة العامة للتنمية الصناعية، لعدد 30 متدربا من السادة المديرين والإداريين بالهيئة.',
        dateTime: currentDateTime, 
      },
     
        {
        img: img7,
        title:'بسام راضي: وزير الصناعة الإيطالى يزور القاهرة غدًا لتعزيز علاقات التعاون',
        description:'أعلن بسام راضي سفير مصر في روما أن "أدولفو أورسو" وزير صنع في إيطاليا، سيزور القاهرة غدا الاثنين لمدة يومين على رأس وفد عريض من قيادات الوزارة والشركات الإيطالية، ومن المنتظر عقد مباحثات بالعاصمة الإدارية الجديدة مع خمس وزراء في الحكومة هم الدكتور عمرو طلعت وزير الاتصالات وتكنولوجيا المعلومات',
        dateTime: currentDateTime, 
      },
    ];

    setData(newData);
  }, []);

  return (
    <div className=' w-60 bg-white my-3 shadow' >
      <div className="container-fluid">
      <h3 className='fw-bolder px-2 pt-2'>أخبار مصر</h3>
      {data.map((item, index) => (
      <div className="row" key={index}>
        <div className="col-md-5">
          <div className='w-img'>
            <img src={item.img} alt={`Image ${index + 1}`} />
            </div>
        </div>
        <div className="col-md-7  ">
        <h5>{item.title}</h5>
          <p>{item.description}</p>
          <p>{item.dateTime}</p>
        </div>
        
      </div>
      
      ))}
      </div>
    </div>
  );
};

export default YourComponent;

