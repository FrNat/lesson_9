const personGenerator = {

    surNameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Наталья",
            "id_2": "Александра",
            "id_3": "Ирина",
            "id_4": "Анна",
            "id_5": "Марина",
            "id_6": "Анастасия",
            "id_7": "Валерия",
            "id_8": "Елена",
            "id_9": "Вера",
            "id_10": "Ольга"
        }
    }`,

    patrNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алексеевич",
            "id_2": "Сергеевич",
            "id_3": "Иванович",
            "id_4": "Игоревич",
            "id_5": "Семёнович",
            "id_6": "Ильич",
            "id_7": "Анатольевич",
            "id_8": "Александрович",
            "id_9": "Петрович",
            "id_10": "Владимирович"
        }
    }`,


    patrNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алексеевна",
            "id_2": "Сергеевна",
            "id_3": "Ивановна",
            "id_4": "Игоревна",
            "id_5": "Семёновна",
            "id_6": "Ильинична",
            "id_7": "Анатольевна",
            "id_8": "Александровна",
            "id_9": "Петровна",
            "id_10": "Владимировна"
        }
    }`,

    profMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "музыкант",
            "id_2": "психолог",
            "id_3": "программист",
            "id_4": "тренер",
            "id_5": "пианист",
            "id_6": "писатель",
            "id_7": "художник",
            "id_8": "дизайнер",
            "id_9": "скульптор",
            "id_10": "архитектор"
        }
    }`,


    profFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "педагог",
            "id_2": "стилист",
            "id_3": "тренер",
            "id_4": "секретарь",
            "id_5": "дизайнер",
            "id_6": "маркетолог",
            "id_7": "актриса",
            "id_8": "медсестра",
            "id_9": "врач",
            "id_10": "программист"
        }
    }`,

    GENDER_MALE: 'мужчина',
    GENDER_FEMALE: 'женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function(json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        let gender = this.randomIntNumber();
        return gender ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomFirstName: function() {
        if (this.person.gender === 'мужчина') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomSurName: function() {
        return this.randomValue(this.surNameJson);
    },

    randomPatrName: function() {
        if (this.person.gender === 'мужчина') {
            return this.randomValue(this.patrNameMaleJson);
        } else {
            return this.randomValue(this.patrNameFemaleJson);
        }
    },

    randomProf: function() {
        if (this.person.gender === 'мужчина') {
            return this.randomValue(this.profMaleJson);
        } else {
            return this.randomValue(this.profFemaleJson);
        }
    },

    randomBirthDay: function() {
        const arrayMonth = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        let month = this.randomIntNumber(11, 0);
        month = arrayMonth[month];
        let day;
        switch (month) {
            case 2:
                day = this.randomIntNumber(28, 1);
                break;
            case 4 || 6 || 9 || 11:
                day = this.randomIntNumber(30, 1);
                break;
            default:
                day = this.randomIntNumber(31, 1);
                break;
        }
        let year = this.randomIntNumber(1989, 2001);
        return day + ' ' + month + ' ' + year + ' года';
    },

    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurName();
        if (this.person.gender === 'женщина') {
            this.person.surName = this.person.surName + 'а';
        }
        this.person.patrName = this.randomPatrName();
        this.person.prof = this.randomProf();
        this.person.birthday = this.randomBirthDay();
        return this.person;
    }
};