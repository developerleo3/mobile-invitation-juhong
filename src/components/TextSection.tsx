"use client";

import FadeInOnView from "@/src/components/FadeInOnView";

export default function TextSection() {
    return (
        <section className="flex px-6 py-24 text-center text-black">
            <div className="mx-auto">
                {/* 타이틀 */}
                <FadeInOnView>
                    <h2 className="font-nanum-myeongjo font-bold text-[16px]">
                        저희 결혼합니다
                    </h2>
                </FadeInOnView>

                {/* 본문(시/문구) */}
                <div className="mt-20 text-[12px] font-nanum-myeongjo leading-relaxed">
                    <FadeInOnView>
                        <p>
                            찬란했던 20대를 나란히 걸으며<br/>
                            서로의 가장 예쁜 시절을 지켜보았습니다<br/><br/>
                        </p>
                    </FadeInOnView>
                    <FadeInOnView>
                        <p>
                            이제 그 오랜 믿음과 사랑으로<br/>
                            평생을 약속하고자 합니다<br/>
                            축복의 걸음으로 자리를 빛내주시면 감사하겠습니다<br/><br/>
                        </p>
                    </FadeInOnView>
                </div>


                {/* 하단 이름 */}
                <FadeInOnView>
                    <div className="mt-20 text-center font-nanum-myeongjo text-[12px] font-bold">
                        <div className="inline-grid grid-cols-[auto_auto_auto] gap-x-3 gap-y-0.5">
                            <span className="text-right">이연수 · 김정화의</span>
                            <span>아들</span>
                            <span>이주홍</span>

                            <span className="text-right">최종구 · 박준하의</span>
                            <span>딸</span>
                            <span>최미향</span>
                        </div>
                    </div>
                </FadeInOnView>
            </div>
        </section>
    );
}