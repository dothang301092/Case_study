//Thiết lập câu hỏi trong mảng
const Quizs =[
    {
        question: ' 1. Giải Grand Slam đầu tiên trong năm là giải nào?',
        answers: [
            'A. Australia open',
            'B. Americal open',
            'C. Wimblondon',
            'D. Spain Open'
        ],
        correct: 0
    },
    {
        question: '2. Cùng với Hà Nội T&T (vô địch V-League 2010), CLB nào của Việt Nam tham dự AFC Cup 2011?',
        answers: [
            'A. Sông Lam Nghệ An',
            'B. SHB Đà Nẵng',
            'C. Hoàng Anh Gia Lai',
            'D. Becamex Bình Dương'
        ],
        correct: 0
    },
    {
        question: '3. AFC Asian Cup 2011 được tổ chức tại quốc gia nào?',
        answers: [
            'A. Qatar',
            'B. Hàn Quốc',
            'C. Nhật Bản',
            'D. Iraq'
        ],
        correct: 0
    },
    {
        question: '4. Đội nào lên ngôi vô địch AFC Asian Cup 2011 tổ chức tại Qatar?',
        answers: [
            'A. Qatar',
            'B. Hàn Quốc',
            'C. Nhật Bản',
            'D. Iraq'
        ],
        correct: 2
    },
    {
        question: '5. Ai là nhạc sĩ Việt Nam đầu tiên viết opera với tác phẩm “Cô sao” và sau đó là “Người tạc tượng”?',
        answers: [
            'A. Đỗ Nhuận',
            'B. Hoàng Vân',
            'C. Trần Hoàn',
            'D. Trọng Đài'
        ],
        correct: 0
    },
    {
        question: '6. Sông Bến Hải và sông Thạch Hãn nằm ở tỉnh nào?',
        answers: [
            'A. Quảng Bình',
            'B. Quảng Ninh',
            'C. Quảng Trị',
            'D. Quảng Ngãi'
        ],
        correct: 2
    },
    {
        question: '7. Trong các cây cầu sau, cầu nào là cầu xoay?',
        answers: [
            'A. Cầu Thanh Trì',
            'B. Cầu Thị Nại',
            'C. Cầu Sông Hàn',
            'D. Cầu Cần Thơ'
        ],
        correct: 2
    },
    {
        question: '8. Đại Ngu là quốc hiệu của triều đại nào?',
        answers: [
            'A. Triều Ngô',
            'B. Triều Hồ',
            'C. Các chúa Nguyễn',
            'D. Nhà Tây Sơn'
        ],
        correct: 1,
    },
    {
        question: '9. Các vua Hùng đặt quốc hiệu nước ta là gì?',
        answers: [
            'A. Văn Lang',
            'B. Âu Lạc',
            'C. Vạn Xuân',
            'D. Đại Việt'
        ],
        correct: 0
    },
    {
        quetsion: '10. An Dương Vương đặt quốc hiệu nước ta là gì?',
        answers: [
            'A. Âu Lạc',
            'B. Vạn Xuân',
            'C. Đại Cồ Việt',
            'D. Đại Việt'
        ],
        correct: 0
    },
    {
        question: '11. Bảy chú lùn trong truyện "Nàng bạch tuyết và bảy chú lùn" làm nghề gì',
        answers: [
            'A. Thợ mỏ',
            'B. Thợ cày',
            'C. Thợ kim khí',
            'D. Thợ nhuộm'
        ],
        correct: 0
    },
    {
        question: '12. Đâu là phần khó nhất trong modul1 của chương trình học Javascript',
        answers: [
            'A. Biến và kiểu dữ liệu',
            'B. Hàm',
            'C. Vòng lặp',
            'D. Hướng đối tượng'
        ],
        correct: 0
    },
    {
        question: '13. Ai là người tạo ra ngôn ngữ Javascript ?',
        answers: [
            'A. Brendan Eich',
            'B. Billgate',
            'C. Steve Job',
            'D. Linus'
        ],
        correct:0
    },
    {
        question: '14. Cầu thủ nào đạt quả bóng vàng năm 2007',
        answers: [
            'A. Ronaldo',
            'B. Messi',
            'C. Ricardo KaKa',
            'D. Rooney'
        ],
        correct: 0
    },
    {
        quetsion: '15. Ngôn ngữ hướng đối tượng có mấy tính chất đặc trưng?',
        answers: [
            'A. 1',
            'B. 2',
            'C. 3',
            'D. 4'
        ],
        correct: 3
    },
];
//khai báo
let Quiz = function () {
    this.question = "";
    this.answers = [];
    this.correct = 0;

    this.setQuiz = function (ques, ans, correct) {
        this.question = ques;
        this.answers = ans;
        this.correct = correct;

    };
// lấy giá trị để hiển thị
    this.display = function () {
        document.getElementById("question").innerHTML = this.question;
        document.getElementById("0").innerHTML = this.answers[0];
        document.getElementById("1").innerHTML = this.answers[1];
        document.getElementById("2").innerHTML = this.answers[2];
        document.getElementById("3").innerHTML = this.answers[3];

    };

};
//bắt đầu chơi
let GameBoard = function () {
    this.quizs = [];
    this.currentQuiz = 0;
// hàm lấy phần tử câu hỏi
    this.creatQuizs = function () {
        for (let i = 0; i < Quizs.length; i++) {
            let quiz = new Quiz();
            quiz.setQuiz(Quizs[i].question, Quizs[i].answers, Quizs[i].correct);
            this.quizs.push(quiz);
        }

    };
    this.start = function () {
        document.getElementsByTagName("div")['prize'+game.currentQuiz]
            .setAttribute("class", "curentQuestion");
        this.creatQuizs();
        this.quizs[this.currentQuiz].display();
    };
    //thực hiện lấy phần tử tiếp theo của mảng câu hỏi
    this.nextQuiz = function () {
        this.currentQuiz++;
        haveChoosed = false;
        this.quizs[this.currentQuiz].display();
    };
};
//khai báo biến này để thay đổi màu khi onclick
let btn = false;
let idSelect = '';
let haveChoosed = false;
// hàm lấy 50 50
function fiftyFifty(mn) {
    if (mn =='start-btn') {
        let fiftyfifty = [0, 1, 2, 3];
        fiftyfifty.splice(Quizs[game.currentQuiz], 1);
        let indexTemp = Math.floor(Math.random() * 2);
        for (let i = 0; i < 4; i++)
            if (i != indexTemp & i != Quizs[game.currentQuiz].correct)
                document.getElementById('' + i).innerHTML = '';
        document.getElementById('start-btn').setAttribute('mn','disable');
    }
}
function withdraw() {
    
}
function resetColorAndStatusButton() {
    document.getElementsByTagName("button")[idSelect].setAttribute("class", "btn");
    btn = false;
    document.getElementById('alert').innerHTML =
        '';
}
// Hàm chuyển tiếp câu hỏi
function nextQuestion() {
    if (haveChoosed) {
        resetColorAndStatusButton();
        let temp = 'prize' + (game.currentQuiz + 1);
        document.getElementsByTagName("div")[temp]
            .setAttribute("class", "curentQuestion");
        game.nextQuiz();
    }
};
//Hàm bắt đầu lại game khi trả lời sai
function restart() {
    document.getElementById('conditionalButton').innerHTML=
        "<button id='next-btn' class='next-btn btn hide' onclick='nextQuestion()'>Next</button>"+
        "<button id='start-btn' class='start-btn btn' onclick='fiftyFifty()'> 50:50 </button>"+
        "<button id='opinion' class='start-btn btn' onclick=''> opinion </button>" +
        "<button id='stop-btn' class='start-btn btn' onclick=''> stop game </button>";
    resetColorAndStatusButton();
    let temp;
    for(let i = game.currentQuiz; i >= 0; i--) {
        temp = 'prize' + i;
        document.getElementsByTagName("div")[temp]
            .setAttribute("class", "score");
    }
    game.currentQuiz = 0;
    game.start();
}

// hàm dừng cuộc chơi
function endGame(id) {
    if (id == 'stop-btn') {
        let temp = document.getElementById('prize' + (game.currentQuiz - 1)).innerHTML;
        alert('Bạn đã dừng cuộc chơi! Giải thưởng của bạn là: ' + temp);
    } else {
        //elses  này sẽ set mức tiền khi trả lời sai
        let money = '0$';
        if (game.currentQuiz > 9)
            money = document.getElementById('prize9').innerHTML;
        else if (game.currentQuiz > 4)
            money = document.getElementById('prize4').innerHTML;
        alert('Bạn đã trả lời sai! Số tiền bạn nhận được là: ' + money);
    }
    restart()

}
// hàm set màu khi onclick
function changeColorButton(id) {
    if (!btn) {
        document.getElementsByTagName("button")[id].setAttribute("class", "colorSelect");
        btn = true;
        idSelect = id;
        checkWin(id);
    }
    ;
};
// Hàm check win
function checkWin(id) {
    haveChoosed = true;
    if (id == Quizs[game.currentQuiz].correct) {
        document.getElementById("alert").innerHTML =
            'Câu Trả Lời Chính Xác';
        document.getElementsByTagName("div")['prize'+game.currentQuiz]
            .setAttribute("class", "gotPrize");
        if (game.currentQuiz == 14) {
            alert('Bạn đã trở thành tỉ phú!');
            document.getElementById('conditionalButton').
                innerHTML = "<button id='restartButton'" +
                "class='start-btn btn' onclick='restart()'>Restart</button>";
        }

    } else {
        // alert("Rất tiếc, Câu trả lời của bạn chưa đúng");
        endGame(id);
    }
}

let game = new GameBoard();
game.start();


