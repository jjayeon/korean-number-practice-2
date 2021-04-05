// langs[i] gives two arrays:
// langs[i][0] is the ones place, langs[i][1] is the tens place.
// prettier-ignore
const langs = {
    sino: [
        ["공", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"],
        ["십", "이십", "삼십", "사십", "오십", "육십", "칠십", "팔십", "구십"],
    ],
    native: [
        ["공", "하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉",],
        ["열", "스물", "서른", "마흔", "쉰", "예순", "일흔", "여든", "아흔"],
    ],
};

export function randNum(min, max) {
    return Math.floor(min + (max - min) * Math.random());
}

export function makeWord(num, lang) {
    let tens = Math.floor(num / 10),
        ones = num % 10,
        out = "";
    if (tens > 0) {
        out += langs[lang][1][tens - 1];
    }
    out += langs[lang][0][ones];
    return out;
}

export function niceThing() {
    let niceThings = [
        "wow!",
        "nice!",
        "good job!",
        "좋아!",
        "대박!",
        "와아!",
        "impressive!",
        "sexy!",
        "incredible!",
        "nice nice!",
        "ez!",
        "진짜!",
    ];
    return niceThings[randNum(0, niceThings.length)];
}
