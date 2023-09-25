function searchDatabase(bunji) {
    if( // 제1통 1반
    (bunji >= 2001 && bunji <= 2020)|| // 2001~2020
    (bunji >= 2022 && bunji <= 2025)|| // 2022~2025
    (bunji >= 2061 && bunji <= 2062)|| // 2061~2062
    (bunji >= 2064 && bunji <= 2071) // 2064~2074
    ){return "제1통 제1반"}
else if( // 제1통 2반
    (bunji == 2021)|| // 2021
    (bunji >= 2026 && bunji <= 2053)|| // 2026~2053
    (bunji >= 2055 && bunji <= 2060)|| // 2055~2060
    (bunji == 2072)|| // 2072
    (bunji >= 2078 && bunji <= 2096) // 2078~2096
){return "제1통 제2반"}
else if( // 제1통 3반
    (bunji >= 2097 && bunji <= 2117)|| // 2097~2117
    (bunji >= 2119 && bunji <= 2143) // 2119~2143
){return "제1통 제3반"}
else if( // 제1통 3반
    (bunji >= 2097 && bunji <= 2117)|| // 2097~2117
    (bunji >= 2119 && bunji <= 2143) // 2119~2143
){return "제1통 제3반"}
else if( // 제2통 1반
    (bunji >= 2761 && bunji <= 2781) // 2761~2781-1번지
){return "제2통 제1반"}
else if( // 제2통 2반
    (bunji >= 2782 && bunji <= 2785)|| // 2782~2785-1번지
    (bunji >= 2789 && bunji <= 2790)|| // 2789~2790
    (bunji >= 2792 && bunji <= 2799) // 2792~2799
){return "제2통 제2반"}
else if( // 제2통 3반
    (bunji >= 2786 && bunji <= 2788)|| // 2786~2788
    (bunji == 2791)|| // 2791
    (bunji == 2794)|| // 2794
    (bunji >= 2800 && bunji <= 2805)|| // 2800~2805
    (bunji >= 2806 && bunji <= 2808) // 2806~2808
){return "제2통 제3반"}
else if( // 제2통 4반
    (bunji >= 2812 && bunji <= 2829) // 2812~2829
){return "제2통 제4반"}
else if( // 제2통 5반
    (bunji >= 2830 && bunji <= 2840) // 2830~2840
){return "제2통 제5반"}
else if( // 제2통 6반
    (bunji >= 2841 && bunji <= 2857) // 2841~2857
){return "제2통 제6반"}
else if( // 제2통 7반
    (bunji >= 2859 && bunji <= 2869) // 2859~2869
){return "제2통 제7반"}
else if( // 제3통 1반
    (bunji >= 2743 && bunji <= 2760) // 2743~2760
){return "제3통 제1반&nbsp (미래타운오피스텔)"}
else if( // 제3통 2반
    (bunji >= 2615 && bunji <= 2629)
){return "제3통 제2반"}
else if( // 제3통 3반
    (bunji >= 2630 && bunji <= 2643)
){return "제3통 제3반"}
else if( // 제3통 4반
    (bunji >= 2602 && bunji <= 2614)
){return "제3통 제4반"}
else if( // 제3통 5반
    (bunji >= 2584 && bunji <= 2601)
){return "제3통 제5반"}
else if( // 제4통 1반
    (bunji >= 2726 && bunji <= 2742)
){return "제4통 제1반"}
else if( // 제4통 2반
    (bunji >= 2714 && bunji <= 2725)
){return "제4통 제2반"}
else if( // 제4통 3반
    (bunji >= 2702 && bunji <= 2713)
){return "제4통 제3반"}
else if( // 제4통 4반
    (bunji >= 2684 && bunji <= 2701)
){return "제4통 제4반"}
else if( // 제4통 5반
    (bunji >= 2644 && bunji <= 2655)||
    (bunji >= 2580 && bunji <= 2583)
){return "제4통 제5반"}
else if( // 제4통 6반
    (bunji >= 2656 && bunji <= 2669)
){return "제4통 제6반"}
else if( // 제4통 7반
    (bunji >= 2670 && bunji <= 2683)
){return "제4통 제7반"}
else if( // 제5통 1반
    (bunji >= 2485 && bunji <= 2487)
){return "제5통 제1반"}
else if( // 제5통 2반
    (bunji >= 2488 && bunji <= 2494)
){return "제5통 제2반"}
else if(
    (bunji >= 2495 && bunji <= 2507)
){return "제5통 제3반"}
else if(
    (bunji == 2508)
){return "제5통 제4반"}
else if(
    (bunji >= 2509 && bunji <= 2526)
){return "제5통 제5반"}
else if(
    (bunji >= 2527 && bunji <= 2539)||
    (bunji == 2550)
){return "제6통 제1반"}
else if(
    (bunji >= 2540 && bunji <= 2539)||
    (bunji >= 2552 && bunji <= 2554)
){return "제6통 제2반"}
else if(
    (bunji >= 2555 && bunji <= 2568)||
    (bunji >= 2578 && bunji <= 2579)
){return "제6통 제3반"}
else if(
    (bunji >= 2569 && bunji <= 2577)
){return "제6통 제4반"}
else if(
    (bunji == 2883)||
    (bunji >= 2887 && bunji <= 2902)
){return "제6통 제5반"}
else if(
    (bunji >= 2879 && bunji <= 2881)||
    (bunji >= 2903 && bunji <= 2915)
){return "제6통 제6반"}
else if(
    (bunji >= 2461 && bunji <= 2483)
){return "제6통 제7반"}
else if(
    (bunji >= 2445 && bunji <= 2460)||
    (bunji == 2484)
){return "제6통 제8반"}
else if(
    (bunji >= 2916 && bunji <= 2929)||
    (bunji >= 2941 && bunji <= 2944)
){return "제7통 제1반"}
else if(
    (bunji >= 2930 && bunji <= 2940)
){return "제7통 제2반"}
else if(
    (bunji >= 2988 && bunji <= 2992)
){return "제7통 제3반&nbsp (중앙아파트)"}
else if(
    (bunji >= 2982 && bunji <= 2987)||
    (bunji >= 2993 && bunji <= 3007)
){return "제7통 제4반"}
else if(
    (bunji >= 2945 && bunji <= 2958)
){return "제7통 제5반"}
else if(
    (bunji >= 2959 && bunji <= 2961)||
    (bunji >= 2974 && bunji <= 2981)
){return "제7통 제6반"}
else if(
    (bunji >= 2962 && bunji <= 2973)
){return "제7통 제7반"}
else if(
    (bunji >= 3008 && bunji <= 3022)||
    (bunji == 3038)
){return "제8통 제1반"}
else if(
    (bunji >= 3023 && bunji <= 3037)
){return "제8통 제2반"}
else if(
    (bunji >= 3092 && bunji <= 3108)
){return "제8통 제3반"}
else if(
    (bunji >= 3074 && bunji <= 3091)||
    (bunji == 3109)
){return "제8통 제4반"}
else if(
    (bunji >= 3063 && bunji <= 3073)
){return "제8통 제5반"}
else if(
    (bunji >= 3039 && bunji <= 3040)||
    (bunji >= 3053 && bunji <= 3062)
){return "제8통 제6반"}
else if(
    (bunji >= 3041 && bunji <= 3052)
){return "제8통 제7반"}
else if(
    (bunji >= 2334 && bunji <= 2351)||
    (bunji >= 2391 && bunji <= 2398)
){return "제9통 제1반&nbsp (더갤러리오피스텔)"}
else if(
    (bunji >= 2432 && bunji <= 2444)||
    (bunji == 2420)
){return "제9통 제2반"}
else if(
    (bunji >= 2421 && bunji <= 2431)||
    (bunji == 2403)
){return "제9통 제3반"}
else if(
    (bunji >= 2399 && bunji <= 2402)||
    (bunji >= 2404 && bunji <= 2419)
){return "제9통 제4반"}
else if(
    (bunji >= 2372 && bunji <= 2390)
){return "제9통 제5반"}
else if(
    (bunji >= 2352 && bunji <= 2371)||
    (bunji == 3110)
){return "제9통 제6반"}
else if(
    (bunji >= 2219 && bunji <= 2226)||
    (bunji >= 2248 && bunji <= 2262)
){return "제10통 제1반"}
else if(bunji == 2263){
    bunji2 = prompt("현대그린타운 101~1114호","101");
    if(bunji2>=101 && bunji2<=620){
    return "제10통 제2반 (현대그린타운)";
    } else if(bunji2>=701 && bunji2<=1114){
    return "제10통 제3반 (현대그린타운)";
    } else{
    return "ERROR";
    }
}
else if(
    (bunji >= 2264 && bunji <= 2291)||
    (bunji == 2292)
){return "제10통 제4반 (성남모란지웰에스테이트오피스텔)"}
else if(
    (bunji >= 2293 && bunji <= 2333)
){return "제10통 제5반"}
else if(bunji == 3121){ // 성남현대아파트
    return "[제11통] 성남현대아파트<br><br>제1반 101동 101 ~ 1502호<br>제2반 101동 103 ~ 1504호<br>제3반 101동 105 ~ 1506호<br>제4반 101동 107 ~ 1508호<br><br>제5반 102동 101 ~ 315호<br>제6반 102동 401 ~ 615호<br>제7반 102동 701 ~ 915호<br>제8반 102동 1001 ~ 1201호<br>제9반 102동 1301 ~ 1515호<br>제10반 102동 116 ~ 1517호<br>"
}
else if(bunji == 3126){ // 금호어울림아파트
    var dong = prompt("동 입력 (금호어울림아파트)", "101");
    // 12통
    if(dong == 101){
        return "[제12통] 금호어울림아파트 101동<br><br>제1반 101동 101 ~ 1402호<br>제2반 101동 203 ~ 1404호"
    } else if(dong == 102){
        return "[제12통] 금호어울림아파트 102동<br><br>제3반 102동 201 ~ 1402호"
    } else if(dong == 103){
        return "[제12통] 금호어울림아파트 103동<br><br>제4반 103동 101 ~ 1502호<br>제5반 103동 103 ~ 1504호"
    } else if(dong == 104){
        return "[제12통] 금호어울림아파트 104동<br><br>제6반 104동 301 ~ 1502호"
    } else if(dong == 106){
        return "[제12통] 금호어울림아파트 106동<br><br>제7반 106동 201 ~ 1402호"
    } else if(dong == 107){
        return "[제12통] 금호어울림아파트 107동<br><br>제8반 107동 101 ~ 1402호<br>제9반 107동 103 ~ 1404호"
    } else if(dong == 105){
        return "[제13통] 금호어울림아파트 105동<br><br>제1반 105동 101 ~ 1502호<br>제2반 105동 103 ~ 1504호"
    } else if(dong == 108){
        return "[제13통] 금호어울림아파트 108동<br><br>제3반 108동 101 ~ 1502호<br>제4반 108동 103 ~ 1504호<br>"
    } else if(dong == 109){
        return "[제13통] 금호어울림아파트 109동<br><br>제5반 109동 101 ~ 1502호<br>제5반 3126번지 단지내 상가<br>제6반 109동 103 ~ 1504호<br>"
    } else if(dong == 110){
        return "[제13통] 금호어울림아파트 110동<br><br>제7반 110동 101 ~ 1502호<br>"
    } else if(dong == 111){
        return "[제13통] 금호어울림아파트 111동<br><br>제8반 111동 301 ~ 1502호<br>제9반 111동 303 ~ 1404호<br>"
    }
}
else if(
    (bunji >= 3122 && bunji <= 3125)
){return "제13통 제7반"}
else if(
    (bunji >= 3300 && bunji <= 3307)
){return "제14통 제1반 (한성듀크빌)(우원파크빌아파트)"}
else if(
    (bunji >= 3308 && bunji <= 3315)
){return "제14통 제2반"}
else if(
    (bunji >= 3316 && bunji <= 3328)
){return "제14통 제3반"}
else if(
    (bunji >= 3329 && bunji <= 3339)
){return "제14통 제4반"}
else if(
    (bunji >= 3340 && bunji <= 3347)
){return "제14통 제5반"}
else if(
    (bunji >= 3348 && bunji <= 3357)
){return "제14통 제6반"}
else if(
    (bunji >= 3358 && bunji <= 3366)
){return "제14통 제7반"}
else if(
    (bunji >= 3367 && bunji <= 3374)
){return "제14통 제8반"}
else if(
    (bunji >= 3375 && bunji <= 3380)
){return "제14통 제9반"}
else if(
    (bunji >= 3629 && bunji <= 3645)
){return "제15통 제1반"}
else if(
    (bunji >= 3646 && bunji <= 3657)
){return "제15통 제2반"}
else if(
    (bunji >= 3658 && bunji <= 3672)
){return "제15통 제3반"}
else if(
    (bunji >= 3673 && bunji <= 3679)
){return "제15통 제4반"}
else if(
    (bunji >= 3680 && bunji <= 3692)
){return "제15통 제5반"}
else if(
    (bunji >= 3693 && bunji <= 3707)
){return "제15통 제6반"}
else if(
    (bunji >= 3759 && bunji <= 3773)
){return "제16통 제1반 (그린팰리스아파트)"}
else if(
    (bunji >= 3774 && bunji <= 3788)
){return "제16통 제2반"}
else if(
    (bunji >= 3715 && bunji <= 3728)||
    (bunji >= 3730 && bunji <= 3737)
){return "제16통 제3반"}
else if(
    (bunji >= 3708 && bunji <= 3714)||
    (bunji >= 3738 && bunji <= 3744)
){return "제16통 제4반"}
else if(
    (bunji >= 3870 && bunji <= 3893)
){return "제17통 제1반"}
else if(
    (bunji >= 3846 && bunji <= 3869)
){return "제17통 제2반"}
else if(
    (bunji >= 3826 && bunji <= 3845)
){return "제17통 제3반"}
else if(
    (bunji >= 3809 && bunji <= 3825)
){return "제17통 제4반"}
else if(
    (bunji >= 3789 && bunji <= 3808)
){return "제17통 제5반"}
else if(
    (bunji >= 3914 && bunji <= 3921)||
    (bunji >= 3924 && bunji <= 3926)
){return "제18통 제1반"}
else if(
    (bunji >= 3894 && bunji <= 3895)||
    (bunji >= 3908 && bunji <= 3913)||
    (bunji >= 3922 && bunji <= 3913)
){return "제18통 제2반"}
else if(
    (bunji >= 3896 && bunji <= 3907)
){return "제18통 제3반"}
else if(
    (bunji >= 3927 && bunji <= 3930)||
    (bunji >= 3956 && bunji <= 3963)
){return "제18통 제4반"}
else if(
    (bunji >= 3931 && bunji <= 3933)||
    (bunji >= 3948 && bunji <= 3955)
){return "제18통 제5반"}
else if(
    (bunji >= 3934 && bunji <= 3947)
){return "제18통 제6반"}
else if(
    (bunji >= 3606 && bunji <= 3628)
){return "제19통 제1반"}
else if(
    (bunji >= 4021 && bunji <= 4030)
){return "제19통 제2반"}
else if(
    (bunji >= 3999 && bunji <= 4020)
){return "제19통 제3반"}
else if(
    (bunji >= 3987 && bunji <= 3998)
){return "제19통 제4반"}
else if(
    (bunji >= 3977 && bunji <= 3986)
){return "제19통 제5반"}
else if(
    (bunji >= 3964 && bunji <= 3976)
){return "제19통 제6반"}
else if(
    (bunji >= 3166 && bunji <= 3188)
){return "제20통 제1반"}
else if(
    (bunji >= 3241 && bunji <= 3273)
){return "제20통 제2반"}
else if(
    (bunji >= 3381 && bunji <= 3400)
){return "제20통 제3반"}
else if(
    (bunji >= 3418 && bunji <= 3438)
){return "제20통 제4반"}
else if(
    (bunji >= 3402 && bunji <= 3417)||
    (bunji == 3680)
){return "제20통 제5반"}
else if(
    (bunji >= 3439 && bunji <= 3443)||
    (bunji >= 3548 && bunji <= 3557)
){return "제21통 제1반"}
else if(
    (bunji == 3547)||
    (bunji >= 3558 && bunji <= 3568)
){return "제21통 제2반"}
else if(
    (bunji >= 3569 && bunji <= 3580)
){return "제21통 제3반"}
else if(
    (bunji >= 3581 && bunji <= 3587)||
    (bunji >= 3601 && bunji <= 3605)
){return "제21통 제4반"}
else if(
    (bunji >= 3588 && bunji <= 3600)||
    (bunji >= 4031 && bunji <= 4034)
){return "제21통 제5반"}
else if(
    (bunji >= 4035 && bunji <= 4038)||
    (bunji >= 4043 && bunji <= 4049)
){return "제22통 제1반"}
else if(
    (bunji >= 4039 && bunji <= 4042)||
    (bunji >= 4052 && bunji <= 4058)
){return "제22통 제2반"}
else if(
    (bunji >= 4050 && bunji <= 4051)||
    (bunji >= 4059 && bunji <= 4068)
){return "제22통 제3반"}
else if(
    (bunji >= 4069 && bunji <= 4079)||
    (bunji >= 4094 && bunji <= 4098)
){return "제22통 제4반"}
else if(
    (bunji >= 4080 && bunji <= 4090)||
    (bunji >= 4092 && bunji <= 4093)
){return "제22통 제5반"}
else if(
    (bunji >= 3189 && bunji <= 3213)
){return "제23통 제1반"}
else if(
    (bunji >= 3214 && bunji <= 3219)||
    (bunji >= 3220 && bunji <= 3233)||
    (bunji >= 3234 && bunji <= 3240)
){return "제23통 제2반"}
else if(
    (bunji == 1522)||
    (bunji >= 3444 && bunji <= 3449)||
    (bunji >= 3451 && bunji <= 3460)
){return "제23통 제3반"}
else if(
    (bunji >= 3466 && bunji <= 3480)
){return "제23통 제4반"}
else if(
    (bunji >= 3461 && bunji <= 3465)||
    (bunji >= 3481 && bunji <= 3498)
){return "제23통 제5반"}
else if(
    (bunji >= 3526 && bunji <= 3546)
){return "제24통 제1반"}
else if(
    (bunji >= 3499 && bunji <= 3525)
){return "제24통 제2반"}
else if(
    (bunji >= 4112 && bunji <= 4129)
){return "제24통 제3반"}
else if(
    (bunji >= 4099 && bunji <= 4111)
){return "제24통 제4반"}
else if(
    (bunji >= 4130 && bunji <= 4154)
){return "제25통 제1반"}
else if(
    (bunji >= 4331 && bunji <= 4332)||
    (bunji >= 4339 && bunji <= 4341)||
    (bunji >= 4343 && bunji <= 4351)||
    (bunji == 4348)
){return "제25통 제2반"}
else if(
    (bunji >= 4310 && bunji <= 4330)||
    (bunji >= 4333 && bunji <= 4338)||
    (bunji == 4299)
){return "제25통 제3반"}
else if(
    (bunji >= 4352 && bunji <= 4365)||
    (bunji == 4356)||
    (bunji == 4363)
){return "제25통 제4반"}
else if(
    (bunji >= 4366 && bunji <= 4381)||
    (bunji >= 4383 && bunji <= 4385)||
    (bunji == 4508)
){return "제25통 제5반"}
else if(
    (bunji >= 4509 && bunji <= 4526)||
    (bunji >= 4533 && bunji <= 4535)||
    (bunji == 4539)
){return "제25통 제6반"}
else if(
    (bunji >= 4155 && bunji <= 4168)
){return "제26통 제1반"}
else if(
    (bunji == 4256)||
    (bunji >= 4283 && bunji <= 4309)
){return "제26통 제2반"}
else if(
    (bunji >= 4257 && bunji <= 4282)
){return "제26통 제3반"}
else if(
    (bunji >= 4402 && bunji <= 4415)
){return "제26통 제4반"}
else if(
    (bunji >= 4416 && bunji <= 4434)
){return "제26통 제5반"}
else if(
    (bunji >= 4386 && bunji <= 4401)||
    (bunji >= 4491 && bunji <= 4507)||
    (bunji >= 4527 && bunji <= 4532)||
    (bunji >= 4536 && bunji <= 4539)||
    (bunji == 4533)
){return "제26통 제6반"}
else if(
    (bunji >= 4169 && bunji <= 4186)
){return "제27통 제1반 (성남메트로칸오피스텔)"}
else if(
    (bunji >= 4244 && bunji <= 4255)
){return "제27통 제2반"}
else if(
    (bunji >= 4221 && bunji <= 4446)
){return "제27통 제3반"}
else if(
    (bunji >= 4214 && bunji <= 4220)
){return "제27통 제4반"}
else if(
    (bunji >= 4187 && bunji <= 4213)||
    (bunji >= 4447 && bunji <= 4454)
){return "제27통 제5반"}
else if(
    (bunji >= 4455 && bunji <= 4477)||
    (bunji >= 4479 && bunji <= 4486)
){return "제27통 제6반"}
else if(
    (bunji >= 4873 && bunji <= 4904)
){return "제28통 제1반"}
else if(
    (bunji >= 4905 && bunji <= 4929)
){return "제28통 제2반"}
else if(
    (bunji >= 4930 && bunji <= 4944)
){return "제28통 제3반"}
else if(
    (bunji >= 3130 && bunji <= 3136)
){return "제29통 제1반"}
else if(
    (bunji >= 3137 && bunji <= 3146)
){return "제29통 제2반"}
else if(
    (bunji >= 3147 && bunji <= 3165)
){return "제29통 제3반 (렉스타운오피스텔)"}
else if(
    (bunji >= 3274 && bunji <= 3280)
){return "제29통 제4반"}
else if(
    (bunji >= 3281 && bunji <= 3284)
){return "제29통 제5반"}
else if(
    (bunji >= 3285 && bunji <= 3287)
){return "제29통 제6반"}
else if(
    (bunji >= 3288 && bunji <= 3299)
){return "제29통 제7반 (참조은 고시텔)"}
else if(
    (bunji >= 2144 && bunji <= 2149)
){return "제30통 제1반"}
else if(
    (bunji >= 2150 && bunji <= 2156)
){return "제30통 제2반"}
else if(
    (bunji >= 2157 && bunji <= 2163)
){return "제30통 제3반"}
else if(
    (bunji >= 2164 && bunji <= 2174)
){return "제30통 제4반 (영건센스빌오피스텔)"}
else if(
    (bunji >= 2175 && bunji <= 2205)
){return "제30통 제5반 (코아루천년가오피스텔)"}
else if(
    (bunji >= 3747 && bunji <= 3748)
){return "금오아파트<br>제31통 제1반"}
else if(
    (bunji >= 3749 && bunji <= 3752)
){return "31통 제2반"}
else if(
    (bunji >= 3753 && bunji <= 3756)
){return "31통 제3반 (예건체리쉬아파트)(SR하이원아파트)"}
else if(
    (bunji >= 3745 && bunji <= 3746)||
    (bunji >= 3757 && bunji <= 3758)
){return "31통 제4반"}
else if(bunji == 4864){
    bunji2 = prompt("LH 101~107동","101");
    if(bunji2==101){
    return "제32통 제1반 (성남여수LH 101동)";
    } else if(bunji2==102){
    return "제32통 제2반 (성남여수LH 102동)";
    } else if(bunji2==103){
    return "제32통 제3반 (성남여수LH 103동)";
    } else if(bunji2==104){
    return "제32통 제4반 (성남여수LH 104동)";
    } else if(bunji2==105){
    return "제32통 제5반 (성남여수LH 105동)";
    } else if(bunji2==106){
    return "제32통 제6반 (성남여수LH 106동)";
    } else if(bunji2==107){
    return "제32통 제7반 (성남여수LH 107동)";
    } else{
    return "ERROR";
    }
}
else if((bunji >= 2227 && bunji <= 2229)||(bunji >= 2230 && bunji <= 2231)){
    return "제33통 제1반"}

else if((bunji == 1404)){
    return "[제33통]센트럴푸르지오시티<br><br>제1반&nbsp&nbsp A201 ~ A376<br>제2반&nbsp&nbsp A401 ~ A576<br>제3반&nbsp&nbsp A601 ~ A776<br>제4반&nbsp&nbsp A801 ~ A976<br>제5반&nbsp&nbsp A1001 ~ A1176<br>제6반&nbsp&nbsp A1201 ~ A1344<br><br>제7반&nbsp&nbsp B202 ~ B443<br>제8반&nbsp&nbsp B501 ~ B743<br>제9반&nbsp&nbsp B801 ~ B1043<br>제10반 B1101 ~ B1327<br>"
} else {
        return "정보를 찾을 수 없습니다.";
    }
}
