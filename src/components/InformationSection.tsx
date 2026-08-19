"use client";

import { useRef, useState } from "react";
import FadeInOnView from "@/src/components/FadeInOnView";

export default function InformationSection() {
    const [infoPage, setInfoPage] = useState(0); // 0 or 1
    const INFO_TOTAL = 1;

    // 스와이프 추가
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const goPrevInfo = () => setInfoPage((p) => Math.max(0, p - 1));
    const goNextInfo = () => setInfoPage((p) => Math.min(INFO_TOTAL - 1, p + 1));

    // 터치 스와이프 추가
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.changedTouches[0].clientX;

        if (touchStartX.current == null || touchEndX.current == null) return;

        const diff = touchStartX.current - touchEndX.current;
        const threshold = 40; // 너무 민감하지 않게

        if (diff > threshold) {
            goNextInfo(); // 왼쪽으로 밀면 다음 페이지
        } else if (diff < -threshold) {
            goPrevInfo(); // 오른쪽으로 밀면 이전 페이지
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <section className="px-6 py-20 text-center text-black bg-[#EDEDED]">
            {/* 타이틀 SVG */}
            <FadeInOnView>
                <div className="mx-auto w-40 max-w-[70vw]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/svgs/information.svg" alt="Information" className="w-full h-auto" />
                </div>
            </FadeInOnView>

            {/* 서브 타이틀 (페이지별) */}
            <FadeInOnView>
                <div className="mt-7 font-noto-sans-kr text-[13px] font-semibold">
                    안내 사항
                </div>
            </FadeInOnView>

            {/* 카드 + 슬라이드 */}
            <FadeInOnView>
                <div className="mt-7">
                    <div
                        className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-[0_10px_28px_rgba(0,0,0,0.10)]"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="relative">
                            <div className="overflow-hidden">
                                <div
                                    className="flex w-[300%] transition-transform duration-300 ease-out"
                                    style={{ transform: `translateX(-${infoPage * (100 / INFO_TOTAL)}%)` }}
                                >
                                    {/* page 1 */}
                                    <div className="w-1/3 shrink-0 px-6 h-[330px] grid grid-rows-2 relative">

                                        {/* 식사 안내 */}
                                        <div className="flex flex-col justify-center">
                                            <p className="font-noto-sans-kr text-[13px] font-semibold text-black mb-5">
                                                [ 식사 안내 ]
                                            </p>

                                            <div className="flex justify-center">
                                                <p className="font-nanum-myeongjo text-[11.5px] font-bold text-left">
                                                    · 위치 : 2층 연회장 (팰리스홀 바로 옆)
                                                    <br />
                                                    · 시간 : 10:30 ~ 13:00
                                                    <br />
                                                    (예식 30분 전부터 이용 가능합니다.)
                                                </p>
                                            </div>
                                        </div>

                                        {/* 가운데 구분선 */}
                                        <div className="absolute mx-7 left-0 right-0 top-1/2 border-t border-dashed border-[#AC5344]" />

                                        {/* 주차 안내 */}
                                        <div className="flex flex-col justify-center">
                                            <p className="font-noto-sans-kr text-[13px] font-semibold text-black mb-5">
                                                [ 주차 안내 ]
                                            </p>

                                            <p className="font-nanum-myeongjo text-[11.5px] font-bold text-center">
                                                웨딩홀 주차장은 당일 무료입니다.
                                                <br />
                                                <br />
                                                주차요원의 안내에 따라 입차해 주시기 바라며,
                                                <br />
                                                별도의 주차 정산 없이 출차 가능합니다.
                                            </p>
                                        </div>
                                    </div>

                                    {/* page 2 */}
                                    <div className="w-1/3 shrink-0 px-6 pt-7 h-[330px] flex flex-col">
                                        <p className="font-noto-sans-kr text-[13px] font-semibold text-black">
                                            [ 2부 예식 안내 ]
                                        </p>

                                        <div className="h-[80px] flex items-center justify-center">
                                            <p className="font-nanum-myeongjo text-[11.5px] font-bold text-center">
                                                1부 예식 후,<br />
                                                2부 예식이 이어집니다.
                                            </p>
                                        </div>

                                        <div className="mx-auto w-full border-t border-dashed border-[#AC5344]" />

                                        <div className="flex-1 flex items-center justify-center">
                                            <div className="font-gowun-batang text-[11px] text-black text-center">
                                                2부에는 작은 이벤트가 준비되어 있으니
                                                <br />
                                                늦은 시간이지만
                                                <br />
                                                끝까지 함께해주시면 감사하겠습니다.
                                                <br />
                                                <br />
                                                2부 예식이 마무리된 후에는
                                                <br />
                                                감사의 마음을 담아 예식에 사용된
                                                <br />
                                                꽃을 나누어 드릴 예정입니다.
                                                <br />
                                                <br />
                                                함께한 순간을 오래도록 기억해주시길 바랍니다.
                                            </div>
                                        </div>
                                    </div>

                                    {/* page 3 */}
                                    <div className="w-1/3 shrink-0 px-6 pt-7 h-[330px] flex flex-col">
                                        <p className="font-noto-sans-kr text-[13px] font-semibold text-black">
                                            [ 화환 관련 안내 ]
                                        </p>

                                        <div className="h-[80px] flex items-center justify-center">
                                            <p className="font-nanum-myeongjo text-[11.5px] font-bold text-center">
                                                저희 예식은 공간이 협소한 관계로<br />
                                                예식장 규정에 따라 화환은 정중히 사양하고 있습니다.
                                            </p>
                                        </div>

                                        <div className="mx-auto w-full border-t border-dashed border-[#AC5344]" />

                                        <div className="flex-1 flex items-center justify-center">
                                            <div className="font-gowun-batang text-[11px] text-black text-center">
                                                보내주시는 마음만으로도
                                                <br />
                                                충분히 감사드리며,
                                                <br />
                                                <br />
                                                화환 대신 리본이나
                                                <br />
                                                축하 깃발, 작은 화분으로
                                                <br />
                                                마음을 전해주시면 감사하겠습니다.
                                                <br />
                                                <br />
                                                소중한 발걸음과 따뜻한 마음,
                                                <br />
                                                큰 기쁨으로 간직하겠습니다.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 하단 네비게이션 */}
                        {/*<div className="flex items-center justify-center gap-4 pb-4">
                            <button
                                type="button"
                                onClick={goPrevInfo}
                                disabled={infoPage === 0}
                                className={[
                                    "px-2 py-1 text-[10px] text-[#6B6B6B] active:scale-[0.96]",
                                    infoPage === 0 ? "cursor-not-allowed opacity-30" : "opacity-100",
                                ].join(" ")}
                                aria-label="이전 안내"
                            >
                                {"<"}
                            </button>

                            <div className="font-noto-sans-kr text-[10px] text-[#6B6B6B]">
                                {infoPage + 1}/{INFO_TOTAL}
                            </div>

                            <button
                                type="button"
                                onClick={goNextInfo}
                                disabled={infoPage === INFO_TOTAL - 1}
                                className={[
                                    "px-2 py-1 text-[10px] text-[#6B6B6B] active:scale-[0.96]",
                                    infoPage === INFO_TOTAL - 1 ? "cursor-not-allowed opacity-30" : "opacity-100",
                                ].join(" ")}
                                aria-label="다음 안내"
                            >
                                {">"}
                            </button>
                        </div>*/}
                    </div>
                </div>
            </FadeInOnView>
        </section>
    );
}