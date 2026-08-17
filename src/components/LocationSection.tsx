"use client";

import Image from "next/image";
import {useEffect, useState} from "react";
import FadeInOnView from "@/src/components/FadeInOnView";

type Props = {
    copyText: (text: string) => void | Promise<void>;
};

const MapModal = ({
                      open,
                      onClose,
                  }: {
    open: boolean;
    onClose: () => void;
}) => {
    useEffect(() => {
        if (!open) return;

        const scrollY = window.scrollY;

        const prev = {
            overflow: document.body.style.overflow,
            position: document.body.style.position,
            top: document.body.style.top,
            width: document.body.style.width,
        };

        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";

        return () => {
            document.body.style.overflow = prev.overflow;
            document.body.style.position = prev.position;
            document.body.style.top = prev.top;
            document.body.style.width = prev.width;
            window.scrollTo(0, scrollY);
        };
    }, [open]);

    if (!open) return null;

    // 지도 확대 보기
    /*return (
        <div className="fixed inset-0 z-9998" role="dialog" aria-modal="true">
            <button
                type="button"
                onClick={onClose}
                className="absolute inset-0 bg-black/55"
                aria-label="지도 확대 닫기"
            />

            <div className="absolute left-1/2 top-1/2 w-[90%] max-w-[390px] -translate-x-1/2 -translate-y-1/2">
                <div
                    className="overflow-hidden rounded-[10px] bg-[url('/images/paper_bg.jpg')] bg-cover bg-center shadow-[0_18px_40px_rgba(0,0,0,0.24)]"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-end px-3 pt-3">
                        <button
                            type="button"
                            className="flex h-9 w-9 items-center justify-center text-[#AC5344] text-[30px] active:scale-[0.95]"
                            onClick={onClose}
                            aria-label="닫기"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="px-4 pb-6 pt-2">
                        <div className="mx-auto w-40 max-w-[70vw]">
                            <img src="/svgs/location.svg" alt="Location" className="w-full h-auto"/>
                        </div>

                        <div className="mt-5 text-center font-noto-sans-kr text-[13px] font-semibold text-black">
                            빌라드지디 논현
                        </div>

                        <div className="mt-5 text-center font-gowun-batang text-[10px] text-black">
                            도보로 오실 경우, 안내드린 경로가<br />
                            평지로 가장 편하게 이동하실 수 있는 길입니다.<br />
                            해당 경로 이용을 권장드립니다.
                        </div>

                        <div className="mt-5 overflow-hidden border border-[#EFEFEF] bg-white">
                            <div className="overflow-x-scroll overflow-y-hidden map-scroll">
                                <Image
                                    src="/images/location.jpg"
                                    alt="확대된 지도"
                                    width={1400}
                                    height={300}
                                    className="block h-[300px] w-auto max-w-none"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );*/
};

export default function LocationSection({copyText}: Props) {
    const [mapOpen, setMapOpen] = useState(false);

    return (
        <>
            <section className="py-20 text-center text-black bg-white">
                <FadeInOnView>
                    <div className="mx-auto w-40 max-w-[70vw]">
                        <img src="/svgs/location.svg" alt="Location" className="w-full h-auto"/>
                    </div>
                </FadeInOnView>

                <FadeInOnView>
                    <div className="mt-7">
                        <div className="text-[13px] font-noto-sans-kr font-semibold">대전 유성컨벤션웨딩홀 2층 팰리스홀</div>
                        <div className="mt-7 flex justify-center items-center gap-2">
                            <p className="text-[13px] font-noto-sans-kr font-semibold">대전광역시 유성구 온천북로 77</p>
                            <button
                                type="button"
                                onClick={() => copyText("대전광역시 유성구 온천북로 77")}
                                className="shrink-0 active:scale-[0.9]"
                                aria-label="웨딩홀 주소 복사"
                            >
                                <img src="/svgs/copy.svg" alt="copy" className="h-3 w-3"/>
                            </button>
                        </div>
                        <div className="mt-1 flex justify-center items-center gap-2">
                            <p className="text-[13px] font-noto-sans-kr font-normal">지번 | 대전광역시 유성구 봉명동 692-4</p>
                            <button
                                type="button"
                                onClick={() => copyText("대전광역시 유성구 봉명동 692-4")}
                                className="shrink-0 active:scale-[0.9]"
                                aria-label="웨딩홀 주소 복사(지번)"
                            >
                                <img src="/svgs/copy.svg" alt="copy" className="h-3 w-3"/>
                            </button>
                        </div>
                    </div>
                </FadeInOnView>

                <FadeInOnView>
                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    onClick={() => setMapOpen(true)}*/}
                    {/*    className="mt-6 block w-full px-3 active:scale-[0.995]"*/}
                    {/*    aria-label="지도 확대 보기"*/}
                    {/*>*/}
                        <div className="mt-6 px-3 w-full overflow-hidden border border-[#EFEFEF]">
                            <Image
                                src="/images/location01.jpg"
                                alt="map"
                                width={900}
                                height={560}
                                className="h-auto w-full"
                            />
                        </div>
                    {/*</button>*/}
                    {/*<p className="mt-3 font-noto-sans-kr font-semibold text-[9px]">지도를 클릭하시면 크게 보기가 가능합니다</p>*/}
                </FadeInOnView>

                <div className="px-6 mt-8 text-left">
                    {/* 대중교통 */}
                    <FadeInOnView>
                        <div className="mt-6 flex gap-2">
                            <div className="h-4 w-4 shrink-0 flex mt-0.5 items-center justify-center">
                                <img
                                    src="/svgs/shuttle.svg"
                                    alt="shuttle"
                                    className="h-[16px] w-[16px]"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="font-noto-sans-kr text-[13px] font-semibold">대중교통 이용시</div>
                                <div className="mt-3 space-y-0.5 text-[12px] font-noto-sans-kr">
                                    <p className="font-semibold"><span className="text-[#AC5344] mr-1">시내버스</span> 102번, 108번, 706번, 106번, 113번 버스</p>
                                </div>
                                <div
                                    className="mt-1 space-y-1 text-[11px] text-[#6B6B6B] font-noto-sans-kr leading-relaxed">
                                    <p>*홈플러스 유성점 하차</p>
                                </div>
                                <div className="mt-1 space-y-0.5 text-[12px] font-noto-sans-kr">
                                    <p className="font-semibold"><span className="text-[#AC5344] mr-4.5">지하철</span>1호선 갑천역 3번 출구 (돌다리 건너편)</p>
                                </div>
                            </div>
                        </div>
                    </FadeInOnView>

                    {/* 고속버스 */}
                    <FadeInOnView>
                        <div className="mt-6 flex gap-2">
                            <div className="h-4 w-4 shrink-0 flex mt-0.5 items-center justify-center">
                                <img
                                    src="/svgs/shuttle.svg"
                                    alt="shuttle"
                                    className="h-[16px] w-[16px]"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="font-noto-sans-kr text-[13px] font-semibold">고속버스 이용시</div>
                                <div className="mt-3 space-y-0.5 text-[12px] font-noto-sans-kr">
                                    <p className="font-semibold text-[#AC5344]">대전고속버스터미널</p>
                                </div>
                                <div
                                    className="mt-1 space-y-1 text-[11px] text-[#6B6B6B] font-noto-sans-kr leading-relaxed">
                                    <p>*버스 102번, 106번 탑승 후 홈플러스 유성점에서 하차</p>
                                </div>
                                <div className="mt-1 space-y-0.5 text-[12px] font-noto-sans-kr">
                                    <p className="font-semibold text-[#AC5344]">유성고속버스터미널</p>
                                </div>
                                <div
                                    className="mt-1 space-y-1 text-[11px] text-[#6B6B6B] font-noto-sans-kr leading-relaxed">
                                    <p>*도보 500m 후 102번 버스 탑승 &gt; 홈플러스 유성점에서 하차</p>
                                </div>
                            </div>
                        </div>
                    </FadeInOnView>

                    {/* 자가용 */}
                    <FadeInOnView>
                        <div className="mt-6 flex gap-2">
                            <div className="h-4 w-4 shrink-0 flex mt-0.5 items-center justify-center">
                                <img
                                    src="/svgs/shuttle.svg"
                                    alt="shuttle"
                                    className="h-[16px] w-[16px]"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="font-noto-sans-kr text-[13px] font-semibold">자가용 이용시</div>
                                <div className="mt-3 space-y-0.5 text-[12px] font-noto-sans-kr">
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold">유성IC &gt; 홈플러스 유성점 &gt; 갑천변 유성컨벤션웨딩홀</p>
                                    </div>
                                    <div className="space-y-0.5 text-[12px] font-noto-sans-kr">
                                        <div className="flex items-center gap-2">
                                            <p className="font-semibold text-[#AC5344]">주차 :&nbsp;
                                                <span className="font-normal">유성컨벤션웨딩홀</span>
                                            </p>
                                            <button
                                                type="button"
                                                onClick={() => copyText("대전 유성구 온천북로 77")}
                                                className="shrink-0 active:scale-[0.9]"
                                                aria-label="유성컨벤션웨딩홀 주소 복사"
                                            >
                                                <img src="/svgs/copy.svg" alt="copy" className="h-3 w-3"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-1 space-y-0.5 text-[11px] text-[#6B6B6B] font-noto-sans-kr">
                                    <p>*도착 후 안내에 따라 이용</p>
                                </div>
                            </div>
                        </div>
                    </FadeInOnView>
                </div>

                {/*<FadeInOnView>
                    <div className="px-6 mt-6">
                        <a
                            href="https://nonhyeonvilladegd.com/86"
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-10 w-full items-center justify-center rounded-md
                        bg-[#AC5344] text-white font-gowun-batang text-[13px] font-bold
                        shadow-[0_8px_18px_rgba(0,0,0,0.14)] active:scale-[0.99]"
                        >
                            주차 안내
                        </a>
                    </div>
                </FadeInOnView>*/}
            </section>

            <MapModal open={mapOpen} onClose={() => setMapOpen(false)}/>
        </>
    );
}