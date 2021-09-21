const str = `
010-1234-5678
sws1552@gmail.com
https://www.omdapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;


// test = 정규식.test(문자열) 일치 여부(Boolean) 반환
// match = 문자열.match(정규식) 일치하는 문자열의 배열(Array) 반환
// replace = 문자열.replace(정규식,대체문자) 일치하는 문자열을 대체하고 대체된 문자열(String) 반환

// const regexp = /fox/gi;
// console.log(regexp.test(str));
// console.log(str.match(regexp));
// str = str.replace(regexp,'banana');
// console.log('str !! ',str);

// const regexp = /\b\w{2,3}\b/g;
// console.log(str.match(regexp));


const regexp = /(?<=@).{1,}/g;
console.log(str.match(regexp));






































































































































































