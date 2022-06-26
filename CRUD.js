const data = [
  { id: 1, status: 're-exam', name: 'Rakhimjonov Davronbek' },
  { id: 2, status: 'passed', name: 'Komil Muhammadiyev' },
  { id: 3, status: 'passed', name: 'Mahkamov Tohirbek' },
  { id: 4, status: 'failed', name: 'Nuraliev Zuhriddin' },
  { id: 5, status: 're-exam', name: 'Dilshodbek Boymamatov' },
  { id: 6, status: 'passed', name: 'Muhharam Ozodboyeva' },
  { id: 7, status: 'failed', name: 'Azimov Umarbek' },
  { id: 8, status: 'passed', name: 'Abdurazzaqov Hasanboy' },
  { id: 9, status: 'passed', name: 'Davlyatov MuhammadAli' },
  { id: 10, status: 'passed', name: 'Zohidova Ruqiya' },
  { id: 11, status: 'passed', name: 'Abduhamidov Nurbek' },
  { id: 12, status: 'passed', name: 'Nizamov Sardorbek' },
];

const getStudents = (key) => {
    let res = data.sort((a,b) => a[key].localeCompare(b[key]))
    console.log(res);
}
getStudents('name')