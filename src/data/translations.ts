import { Language } from '../types';

export interface TranslationSchema {
  appTitle: string;
  appSubTitle: string;
  tagline: string;
  createHeader: string;
  createSubtitle: string;
  loginHeader: string;
  loginSubtitle: string;
  audioHelp: string;
  audioHelpLogin: string;
  demoFillBtn: string;
  demoFillLoginBtn: string;
  rememberMe: string;
  forgotPassword: string;
  schoolAutocomplete: {
    label: string;
    placeholder: string;
    searching: string;
    noMatchFound: string;
    cantFindPrompt: string;
    manualCardTitle: string;
    manualSchoolNameLabel: string;
    manualSchoolNamePlaceholder: string;
    manualAddressLabel: string;
    manualAddressPlaceholder: string;
    infoCardText: string;
    selectedBadge: string;
    changeSchool: string;
    verifiedBadge: string;
    pendingBadge: string;
    switchToSearch: string;
  };
  fields: {
    fullName: { label: string; placeholder: string; hint: string };
    email: { label: string; placeholder: string; hint: string };
    mobile: { label: string; placeholder: string; hint: string };
    identifier: { label: string; placeholder: string; hint: string };
    dob: { label: string; placeholder: string; hint: string };
    gender: { label: string; placeholder: string; hint: string };
    grade: { label: string; placeholder: string; hint: string };
    schoolName: { label: string; placeholder: string; hint: string };
    schoolAddress: { label: string; placeholder: string; hint: string };
    district: { label: string; placeholder: string; hint: string };
    state: { label: string; placeholder: string; hint: string };
    preferredLanguage: { label: string; placeholder: string; hint: string };
    parentName: { label: string; placeholder: string; hint: string };
    parentMobile: { label: string; placeholder: string; hint: string };
    password: { label: string; placeholder: string; hint: string };
    confirmPassword: { label: string; placeholder: string; hint: string };
  };
  genderOptions: {
    male: string;
    female: string;
    other: string;
    preferNot: string;
  };
  buttons: {
    login: string;
    createAccount: string;
    continueWithGoogle: string;
    alreadyHaveAccount: string;
    signInLink: string;
    dontHaveAccount: string;
    signUpLink: string;
  };
  agreeTermsText: string;
  termsLink: string;
  privacyLink: string;
  errors: {
    required: string;
    invalidEmail: string;
    invalidMobile: string;
    invalidIdentifier: string;
    passwordShort: string;
    passwordMismatch: string;
    incorrectPassword: string;
    mustAgreeTerms: string;
    futureDob: string;
    schoolNameRequired: string;
    schoolAddressRequired: string;
  };
  voiceInstruction: string;
  voiceLoginInstruction: string;
  forgotModal: {
    title: string;
    subtitle: string;
    instruction: string;
    sendOtp: string;
    otpSentMsg: string;
    enterOtp: string;
    newPassword: string;
    resetBtn: string;
    successMsg: string;
    close: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    appTitle: 'EduVoice / STEM Buddy',
    appSubTitle: 'AI-Powered STEM Assistant',
    tagline: 'Breaking Language Barriers in STEM Education',
    createHeader: 'Create Your Student Account',
    createSubtitle: 'Start your AI-powered STEM learning journey in Tamil or English.',
    loginHeader: 'Welcome Back',
    loginSubtitle: 'Login to continue your AI-powered learning journey.',
    audioHelp: 'Listen to Audio Instructions',
    audioHelpLogin: 'Listen to Login Voice Help',
    demoFillBtn: 'Auto-fill Student Demo',
    demoFillLoginBtn: 'Demo Login Fill',
    rememberMe: 'Remember Me',
    forgotPassword: 'Forgot Password?',
    schoolAutocomplete: {
      label: 'School Name',
      placeholder: 'Type school name to search database (e.g. Govt Higher Sec / Don Bosco / St. Bedes)...',
      searching: 'Searching Tamil Nadu schools database...',
      noMatchFound: 'No matching school found in our database.',
      cantFindPrompt: "Can't find your school? Add it manually.",
      manualCardTitle: 'Manual School Registration',
      manualSchoolNameLabel: 'School Name',
      manualSchoolNamePlaceholder: 'Enter official school name',
      manualAddressLabel: 'Complete School Address',
      manualAddressPlaceholder: 'Door No, Street Name, Area/Village, Taluk, PIN Code (e.g., Gandhi Nagar, Salem - 636001)',
      infoCardText: 'Your school is not currently available in our database. Please enter the correct school name and address. Your account will be created successfully, and our team will verify the school details later. No document upload is required during registration.',
      selectedBadge: 'Verified School from DB',
      changeSchool: 'Change School',
      verifiedBadge: 'School Verified',
      pendingBadge: 'School Verification Pending',
      switchToSearch: 'Back to Search'
    },
    fields: {
      fullName: {
        label: 'Full Name',
        placeholder: 'e.g., K. Selvam',
        hint: 'Enter your full official name as registered in school'
      },
      email: {
        label: 'Email Address',
        placeholder: 'e.g., selvam.student@gmail.com',
        hint: 'Gmail address preferred for Google Classroom sync'
      },
      mobile: {
        label: 'Mobile Number',
        placeholder: '10-digit mobile number (e.g., 9876543210)',
        hint: '10-digit Indian mobile number'
      },
      identifier: {
        label: 'Email Address or Mobile Number',
        placeholder: 'e.g., student@gmail.com or 9876543210',
        hint: 'Enter registered Gmail address or 10-digit mobile number'
      },
      dob: {
        label: 'Date of Birth',
        placeholder: 'DD/MM/YYYY',
        hint: 'Used for grade verification & security'
      },
      gender: {
        label: 'Gender',
        placeholder: 'Select Gender',
        hint: 'Choose your gender identity'
      },
      grade: {
        label: 'Grade',
        placeholder: 'Select Grade',
        hint: 'Choose your current studying class'
      },
      schoolName: {
        label: 'School Name',
        placeholder: 'Search your Government or Private School...',
        hint: 'Select your school from database or add manually'
      },
      schoolAddress: {
        label: 'Complete School Address',
        placeholder: 'Enter full school address with PIN Code',
        hint: 'Used by admin team for subsequent background school verification'
      },
      district: {
        label: 'District',
        placeholder: 'Select Tamil Nadu District',
        hint: 'Select your school or home district'
      },
      state: {
        label: 'State',
        placeholder: 'Tamil Nadu',
        hint: 'Default state for EduVoice initiative'
      },
      preferredLanguage: {
        label: 'Preferred Language',
        placeholder: 'Select Language',
        hint: 'Your primary language for AI voice & STEM content'
      },
      parentName: {
        label: 'Parent/Guardian Name',
        placeholder: 'e.g., M. Kumar',
        hint: 'Name of father, mother, or legal guardian'
      },
      parentMobile: {
        label: 'Parent/Guardian Mobile Number',
        placeholder: '10-digit guardian contact number',
        hint: 'Used for important AI progress reports & safety'
      },
      password: {
        label: 'Password',
        placeholder: 'Enter your password (min 6 characters)',
        hint: 'Enter your secure account password'
      },
      confirmPassword: {
        label: 'Confirm Password',
        placeholder: 'Re-enter your password',
        hint: 'Must match the password above'
      }
    },
    genderOptions: {
      male: 'Male',
      female: 'Female',
      other: 'Other',
      preferNot: 'Prefer not to say'
    },
    buttons: {
      login: 'Login',
      createAccount: 'Create Account',
      continueWithGoogle: 'Continue with Google',
      alreadyHaveAccount: 'Already have an account?',
      signInLink: 'Sign In',
      dontHaveAccount: "Don't have an account?",
      signUpLink: 'Sign Up'
    },
    agreeTermsText: 'I agree to the',
    termsLink: 'Terms & Conditions',
    privacyLink: 'Privacy Policy',
    errors: {
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address (e.g., name@gmail.com)',
      invalidMobile: 'Enter a valid 10-digit mobile number starting with 6-9',
      invalidIdentifier: 'Please enter a valid email address or 10-digit mobile number',
      passwordShort: 'Password must be at least 6 characters',
      passwordMismatch: 'Passwords do not match',
      incorrectPassword: 'Incorrect password. Password must be at least 6 characters.',
      mustAgreeTerms: 'You must agree to the Privacy Policy and Terms & Conditions',
      futureDob: 'Please enter a valid past Date of Birth',
      schoolNameRequired: 'Please select or enter your School Name',
      schoolAddressRequired: 'Please enter your complete School Address'
    },
    voiceInstruction: 'Welcome to EduVoice STEM Buddy. Please fill in your details to create your student account and start learning Science, Tech, Engineering, and Maths in Tamil or English.',
    voiceLoginInstruction: 'Welcome back to EduVoice STEM Buddy. Please enter your email or mobile number and password to login and continue your AI-powered learning journey in Tamil or English.',
    forgotModal: {
      title: 'Reset Password',
      subtitle: 'Recover access to your EduVoice STEM Buddy account',
      instruction: 'Enter your registered Email or Mobile number to receive a verification OTP.',
      sendOtp: 'Send OTP via SMS / Email',
      otpSentMsg: '6-digit OTP sent to your registered contact number!',
      enterOtp: 'Enter 6-digit OTP (e.g. 542198)',
      newPassword: 'Create New Password',
      resetBtn: 'Update Password & Login',
      successMsg: 'Password updated successfully! You can now log in.',
      close: 'Cancel'
    }
  },
  ta: {
    appTitle: 'எஜுவாய்ஸ் / STEM படி',
    appSubTitle: 'செயற்கை நுண்ணறிவு STEM உதவியாளர்',
    tagline: 'STEM கல்வியில் மொழித் தடைகளை தகர்த்தல்',
    createHeader: 'மாணவர் கணக்கை உருவாக்கவும்',
    createSubtitle: 'தமிழ் அல்லது ஆங்கிலத்தில் உங்கள் AI-இயக்கப்படும் STEM கற்றல் பயணத்தைத் தொடங்குங்கள்.',
    loginHeader: 'மீண்டும் வருக!',
    loginSubtitle: 'உங்கள் AI-இயக்கப்படும் கற்றல் பயணத்தைத் தொடர உள்நுழையவும்.',
    audioHelp: 'குரல் வழிகாட்டலைக் கேட்கவும்',
    audioHelpLogin: 'உள்நுழைவு குரல் உதவி',
    demoFillBtn: 'மாதிரி தகவலை நிரப்பு',
    demoFillLoginBtn: 'மாதிரி உள்நுழைவு',
    rememberMe: 'என்னை நினைவில் கொள்க',
    forgotPassword: 'கடவுச்சொல் மறந்ததா?',
    schoolAutocomplete: {
      label: 'பள்ளி பெயர்',
      placeholder: 'பள்ளி பெயரைத் தட்டச்சு செய்து தேடவும் (எ.கா: அரசு மேல்நிலை / டான் பாஸ்கோ)...',
      searching: 'தமிழ்நாடு பள்ளி தரவுத்தளத்தில் தேடுகிறது...',
      noMatchFound: 'எங்கள் தரவுத்தளத்தில் பொருந்தும் பள்ளி கிடைக்கவில்லை.',
      cantFindPrompt: 'உங்கள் பள்ளி பட்டியிலில் இல்லையா? கைமுறையாக சேர்க்கவும்.',
      manualCardTitle: 'கைமுறை பள்ளிப் பதிவு',
      manualSchoolNameLabel: 'பள்ளி பெயர்',
      manualSchoolNamePlaceholder: 'அதிகாரப்பூர்வ பள்ளி பெயரை உள்ளிடவும்',
      manualAddressLabel: 'முழுமையான பள்ளி முகவரி',
      manualAddressPlaceholder: 'கதவு எண், தெரு பெயர், பகுதி/கிராமம், வட்டம், அஞ்சல் குறியீட்டு எண் (எ.கா: காந்தி நகர், சேலம் - 636001)',
      infoCardText: 'உங்கள் பள்ளி தற்போது எங்கள் தரவுத்தளத்தில் இல்லை. சரியான பள்ளி பெயர் மற்றும் முகவரியை உள்ளிடவும். உங்கள் கணக்கு வெற்றிகரமாக உருவாக்கப்படும், மேலும் எங்கள் குழு பின்னர் பள்ளி விவரங்களை சரிபார்க்கும். பதிவின் போது எந்த ஆவணப் பதிவேற்றமும் தேவையில்லை.',
      selectedBadge: 'தரவுத்தளத்திலிருந்து தேர்ந்தெடுக்கப்பட்ட பள்ளி',
      changeSchool: 'பள்ளியை மாற்றவும்',
      verifiedBadge: 'பள்ளி சரிபார்க்கப்பட்டது',
      pendingBadge: 'பள்ளி சரிபார்ப்பு நிலுவையில் உள்ளது',
      switchToSearch: 'மீண்டும் தேடலுக்குச் செல்'
    },
    fields: {
      fullName: {
        label: 'முழு பெயர்',
        placeholder: 'எ.கா: கே. செல்வம்',
        hint: 'பள்ளியில் பதிவு செய்யப்பட்ட முழு பெயர்'
      },
      email: {
        label: 'மின்னஞ்சல் முகவரி',
        placeholder: 'எ.கா: selvam.student@gmail.com',
        hint: 'ஜிமெயில் முகவரி பரிந்துரைக்கப்படுகிறது'
      },
      mobile: {
        label: 'கைபேசி எண்',
        placeholder: '10 இலக்க கைபேசி எண் (எ.கா: 9876543210)',
        hint: '10 இலக்க இந்திய மொபைல் எண்'
      },
      identifier: {
        label: 'மின்னஞ்சல் முகவரி அல்லது கைபேசி எண்',
        placeholder: 'எ.கா: selvam@gmail.com அல்லது 9876543210',
        hint: 'பதிவு செய்யப்பட்ட மின்னஞ்சல் அல்லது 10 இலக்க கைபேசி எண்'
      },
      dob: {
        label: 'பிறந்த தேதி',
        placeholder: 'தேதி/மாதம்/வருடம்',
        hint: 'வகுப்பு சரிபார்ப்பிற்கு பயன்படும்'
      },
      gender: {
        label: 'பாலினம்',
        placeholder: 'பாலினத்தைத் தேர்ந்தெடுக்கவும்',
        hint: 'உங்கள் பாலின அடையாளம்'
      },
      grade: {
        label: 'வகுப்பு',
        placeholder: 'வகுப்பைத் தேர்ந்தெடுக்கவும்',
        hint: 'நீங்கள் படிக்கும் வகுப்பு'
      },
      schoolName: {
        label: 'பள்ளி பெயர்',
        placeholder: 'அரசு அல்லது தனியார் பள்ளியைத் தேடவும்...',
        hint: 'தரவுத்தளத்திலிருந்து தேர்ந்தெடுக்கவும் அல்லது கைமுறையாக சேர்க்கவும்'
      },
      schoolAddress: {
        label: 'முழுமையான பள்ளி முகவரி',
        placeholder: 'அஞ்சல் குறியீட்டுடன் முழு பள்ளி முகவரியை உள்ளிடவும்',
        hint: 'நிர்வாகக் குழுவின் பின்னணி சரிபார்ப்பிற்கு பயன்படும்'
      },
      district: {
        label: 'மாவட்டம்',
        placeholder: 'தமிழ்நாடு மாவட்டத்தைத் தேர்ந்தெடுக்கவும்',
        hint: 'உங்கள் பள்ளி அல்லது சொந்த மாவட்டம்'
      },
      state: {
        label: 'மாநிலம்',
        placeholder: 'தமிழ்நாடு',
        hint: 'இயல்புநிலை மாநிலம்: தமிழ்நாடு'
      },
      preferredLanguage: {
        label: 'விரும்பும் மொழி',
        placeholder: 'மொழியைத் தேர்ந்தெடுக்கவும்',
        hint: 'STEM பாடங்களைக் கற்க விரும்பும் மொழி'
      },
      parentName: {
        label: 'பெற்றோர் / பாதுகாவலர் பெயர்',
        placeholder: 'எ.கா: எம். குமார்',
        hint: 'தந்தை, தாய் அல்லது பாதுகாவலர் பெயர்'
      },
      parentMobile: {
        label: 'பெற்றோர் / பாதுகாவலர் கைபேசி எண்',
        placeholder: '10 இலக்க பாதுகாவலர் தொடர்பு எண்',
        hint: 'முக்கிய அறிவிப்புகள் மற்றும் பாதுகாப்பு தொடர்பிற்கு'
      },
      password: {
        label: 'கடவுச்சொல்',
        placeholder: 'கடவுச்சொல்லை உள்ளிடவும் (குறைந்தது 6 எழுத்துகள்)',
        hint: 'உங்கள் கணக்கிற்கான கடவுச்சொல்'
      },
      confirmPassword: {
        label: 'கடவுச்சொல்லை உறுதிப்படுத்தவும்',
        placeholder: 'கடவுச்சொல்லை மீண்டும் உள்ளிடவும்',
        hint: 'மேலே உள்ள கடவுச்சொல்லுடன் பொருந்த வேண்டும்'
      }
    },
    genderOptions: {
      male: 'ஆண் (Male)',
      female: 'பெண் (Female)',
      other: 'இதர (Other)',
      preferNot: 'கூற விரும்பவில்லை'
    },
    buttons: {
      login: 'உள்நுழை',
      createAccount: 'கணக்கை உருவாக்கவும்',
      continueWithGoogle: 'கூகுள் மூலம் தொடரவும்',
      alreadyHaveAccount: 'ஏற்கனவே கணக்கு உள்ளதா?',
      signInLink: 'உள்நுழைக',
      dontHaveAccount: 'புதிய மாணவரா? கணக்கு இல்லையா?',
      signUpLink: 'கணக்கை உருவாக்கு'
    },
    agreeTermsText: 'நான் ஒப்புக்கொள்கிறேன்:',
    termsLink: 'விதிகள் & நிபந்தனைகள்',
    privacyLink: 'தனியுரிமைக் கொள்கை',
    errors: {
      required: 'இப்புலம் கட்டாயமானது',
      invalidEmail: 'சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்',
      invalidMobile: '6-9 இல் தொடங்கும் 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்',
      invalidIdentifier: 'சரியான மின்னஞ்சல் அல்லது 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்',
      passwordShort: 'கடவுச்சொல் குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்',
      passwordMismatch: 'கடவுச்சொற்கள் பொருந்தவில்லை',
      incorrectPassword: 'தவறான கடவுச்சொல். குறைந்தது 6 எழுத்துகள் இருக்க வேண்டும்.',
      mustAgreeTerms: 'தனியுரிமைக் கொள்கை மற்றும் விதிகளை ஏற்க வேண்டும்',
      futureDob: 'சரியான பிறந்த தேதியை உள்ளிடவும்',
      schoolNameRequired: 'உங்கள் பள்ளி பெயரைத் தேர்ந்தெடுக்கவும் அல்லது உள்ளிடவும்',
      schoolAddressRequired: 'உங்கள் முழுமையான பள்ளி முகவரியை உள்ளிடவும்'
    },
    voiceInstruction: 'எஜுவாய்ஸ் STEM படி செயலிகளுக்கு நல்வரவு! அறிவியல், தொழில்நுட்பம், கணிதப் பாடங்களை எளிதாகக் கற்க உங்கள் தகவல்களைப் பூர்த்தி செய்து கணக்கை உருவாக்கவும்.',
    voiceLoginInstruction: 'எஜுவாய்ஸ் STEM படி செயலிகளுக்கு மீண்டும் நல்வரவு! உங்கள் AI-இயக்கப்படும் STEM கற்றலைத் தொடர மின்னஞ்சல் அல்லது கைபேசி எண் மற்றும் கடவுச்சொல்லை உள்ளிட்டு உள்நுழையவும்.',
    forgotModal: {
      title: 'கடவுச்சொல் மீட்டமைத்தல்',
      subtitle: 'எஜுவாய்ஸ் STEM படி கணக்கின் அணுகலை மீட்டெடுக்கவும்',
      instruction: 'சரிபார்ப்பு OTP குறியீட்டைப் பெற உங்கள் பதிவுசெய்த மின்னஞ்சல் அல்லது கைபேசி எண்ணை உள்ளிடவும்.',
      sendOtp: 'OTP குறியீடு அனுப்பவும் (SMS / Email)',
      otpSentMsg: '6 இலக்க OTP குறியீடு உங்கள் கைபேசிக்கு அனுப்பப்பட்டது!',
      enterOtp: '6 இலக்க OTP குறியீட்டை உள்ளிடவும் (எ.கா: 542198)',
      newPassword: 'புதிய கடவுச்சொல்லை உருவாக்கவும்',
      resetBtn: 'கடவுச்சொல் புதுப்பித்து உள்நுழையவும்',
      successMsg: 'கடவுச்சொல் வெற்றிகரமாக மாற்றப்பட்டது! இப்போது உள்நுழையலாம்.',
      close: 'ரத்து செய்'
    }
  }
};

