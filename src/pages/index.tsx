import Image from 'next/image';

export default function Home() {
  const handleKakaoLogin = () => {
    const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
    const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;

    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md m-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">환영합니다</h1>
          <p className="text-gray-600">서비스 이용을 위해 로그인해주세요</p>
        </div>

        <button
          onClick={handleKakaoLogin}
          className="w-full flex items-center justify-center gap-2 bg-[#FEE500] text-[#000000] py-3 rounded-lg hover:bg-[#FDD835] transition-colors"
        >
          <Image src="/kakao.svg" alt="Kakao Logo" width={20} height={20} />
          카카오톡으로 계속하기
        </button>
      </div>
    </main>
  );
}
