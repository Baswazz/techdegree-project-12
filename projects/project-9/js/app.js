const chartTrafficId = document.getElementById("traffic");
const chartTrafficDefault = chartTraffic(["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"], [500, 750, 1250, 1000, 1500, 750, 1250, 1000, 1500, 750, 1250]);

function chartTraffic(labels, data) {
    new Chart(chartTrafficId, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Traffic',
                data: data,
                backgroundColor: 'rgba(115, 119, 191, 0.2)',
                borderColor: 'rgba(115, 119, 191, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointRadius: 6,
                pointBorderWidth: 2,
                pointHoverRadius: 6,
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
}

// Alert remove
const alert    = document.querySelector('.alert');
const btnClose = alert.querySelector('.close');

btnClose.addEventListener('click', function(e) {
    btnClose.parentNode.remove();
});

// Dropdown toggle
const dropdown        = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', function(e) {
    dropdownContent.parentNode.classList.toggle('dropdown-show');
});

// Notifications
const notifocations = document.querySelector('.dropdown-content');
const test = notifocations.querySelector('a');

notifocations.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.target.parentNode.remove();
        if (dropdownContent.children.length === 0) {
            console.log('test')
            dropdown.querySelector('.dot').style.display = 'none';
            dropdownContent.remove();
        }
    }
});

// Tabs
const tabs       = document.querySelector('.tabs');
const tabContent = document.querySelectorAll('.tab-content');

tabs.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.preventDefault();
        // chartTrafficId.remove();

        anchors = tabs.getElementsByTagName('BUTTON');
        for (i = 0; i < anchors.length; i ++) {
            anchors[i].classList.remove('active');
        }     
        e.target.classList.add('active');

        // Chart data
        if (e.target.innerText === 'Hourly' ) {
            chartTraffic(["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"], [100, 150, 250, 300, 250, 350, 250]);
        } else if (e.target.innerText === 'Daily' ) {
            chartTraffic(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], [500, 750, 1250, 1000, 1500, 500, 400]);
        } else if (e.target.innerText === 'Weekly' ) {
            chartTraffic(["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"], [500, 750, 1250, 1000, 1500, 750, 1250, 1000, 1500, 750, 1250]);
        } else if (e.target.innerText === 'Monthly' ) {
            chartTraffic(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"], [2000, 1750, 2250, 2000, 2200, 2100, 2300, 2000, 2100, 2200, 1950, 2200]);
        }
    }
});

// Message User Widget
const messageUserForm = document.querySelector('.message-user');
const searchInput = messageUserForm.querySelector('input[type=search]');
const textArea = document.getElementById('user-message');

messageUserForm.addEventListener('submit', function(e) {
    e.preventDefault();
    message = document.createElement('div');

    // Remove message if there is one already
    if (document.querySelector('.error')) {
        document.querySelector('.error').remove();
    } else if (document.querySelector('.success')) {
        document.querySelector('.success').remove();
    }

    if (searchInput.value !== '' && textArea.value !== '') {
        
        message.classList.add('success');
        message.innerText = 'Your message has been sent!';

        if (!document.querySelector('.success')) {
            messageUserForm.appendChild(message);
            // clear text
            searchInput.value = '';
            textArea.value = '';
        }
    } else {
        message.classList.add('error');
        message.innerText = 'Please select an existing user and write a message!';

        if (!document.querySelector('.error')) {
            messageUserForm.appendChild(message);
        }
    }
});

// Users object
const users = [
    { firstName: 'Dale', lastName: 'Byrd'},
    { firstName: 'Dan', lastName: 'Oliver'},
    { firstName: 'Dawn', lastName: 'Wood'},
    { firstName: 'Victoria', lastName: 'Chambers'}
];

const dataList = document.getElementById('user-list');

// Add users to datalist
users.forEach(function(item) {
    var option = document.createElement('option');
    option.value = item.firstName + ' ' + item.lastName;
    dataList.appendChild(option);
});

// Settings
const settingsForm         = document.querySelector('.settings');
const notificationSwitch   = document.getElementById('notifications-email');
const profilePublicSwitch  = document.getElementById('profile-public');
const timezoneSelect       = document.getElementById('timezone');

// Timezones object
const timezones = [
    { value: "-12", name: "(GMT-12:00) International Date Line West" },
    { value: "-11", name: "(GMT-11:00) Midway Island, Samoa" },
    { value: "-10", name: "(GMT-10:00) Hawaii" },
    { value: "-9", name: "(GMT-09:00) Alaska" },
    { value: "-8", name: "(GMT-08:00) Pacific Time (US & Canada)" },
    { value: "-8", name: "(GMT-08:00) Tijuana, Baja California" },
    { value: "-7", name: "(GMT-07:00) Arizona" },
    { value: "-7", name: "(GMT-07:00) Chihuahua, La Paz, Mazatlan" },
    { value: "-7", name: "(GMT-07:00) Mountain Time (US & Canada)" },
    { value: "-6", name: "(GMT-06:00) Central America" },
    { value: "-6", name: "(GMT-06:00) Central Time (US & Canada)" },
    { value: "-6", name: "(GMT-06:00) Guadalajara, Mexico City, Monterrey" },
    { value: "-6", name: "(GMT-06:00) Saskatchewan" },
    { value: "-5", name: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco" },
    { value: "-5", name: "(GMT-05:00) Eastern Time (US & Canada)" },
    { value: "-5", name: "(GMT-05:00) Indiana (East)" },
    { value: "-4", name: "(GMT-04:00) Atlantic Time (Canada)" },
    { value: "-4", name: "(GMT-04:00) Caracas, La Paz" },
    { value: "-4", name: "(GMT-04:00) Manaus" },
    { value: "-4", name: "(GMT-04:00) Santiago" },
    { value: "-3.5", name: "(GMT-03:30) Newfoundland" },
    { value: "-3", name: "(GMT-03:00) Brasilia" },
    { value: "-3", name: "(GMT-03:00) Buenos Aires, Georgetown" },
    { value: "-3", name: "(GMT-03:00) Greenland" },
    { value: "-3", name: "(GMT-03:00) Montevideo" },
    { value: "-2", name: "(GMT-02:00) Mid-Atlantic" },
    { value: "-1", name: "(GMT-01:00) Cape Verde Is." },
    { value: "-1", name: "(GMT-01:00) Azores" },
    { value: "0", name: "(GMT+00:00) Casablanca, Monrovia, Reykjavik" },
    { value: "0", name: "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London" },
    { value: "1", name: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna" },
    { value: "1", name: "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague" },
    { value: "1", name: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris" },
    { value: "1", name: "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb" },
    { value: "1", name: "(GMT+01:00) West Central Africa" },
    { value: "2", name: "(GMT+02:00) Amman" },
    { value: "2", name: "(GMT+02:00) Athens, Bucharest, Istanbul" },
    { value: "2", name: "(GMT+02:00) Beirut" },
    { value: "2", name: "(GMT+02:00) Cairo" },
    { value: "2", name: "(GMT+02:00) Harare, Pretoria" },
    { value: "2", name: "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius" },
    { value: "2", name: "(GMT+02:00) Jerusalem" },
    { value: "2", name: "(GMT+02:00) Minsk" },
    { value: "2", name: "(GMT+02:00) Windhoek" },
    { value: "3", name: "(GMT+03:00) Kuwait, Riyadh, Baghdad" },
    { value: "3", name: "(GMT+03:00) Moscow, St. Petersburg, Volgograd" },
    { value: "3", name: "(GMT+03:00) Nairobi" },
    { value: "3", name: "(GMT+03:00) Tbilisi" },
    { value: "3.5", name: "(GMT+03:30) Tehran" },
    { value: "4", name: "(GMT+04:00) Abu Dhabi, Muscat" },
    { value: "4", name: "(GMT+04:00) Baku" },
    { value: "4", name: "(GMT+04:00) Yerevan" },
    { value: "4.5", name: "(GMT+04:30) Kabul" },
    { value: "5", name: "(GMT+05:00) Yekaterinburg" },
    { value: "5", name: "(GMT+05:00) Islamabad, Karachi, Tashkent" },
    { value: "5.5", name: "(GMT+05:30) Sri Jayawardenapura" },
    { value: "5.5", name: "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi" },
    { value: "5.75", name: "(GMT+05:45) Kathmandu" },
    { value: "6", name: "(GMT+06:00) Almaty, Novosibirsk" },
    { value: "6", name: "(GMT+06:00) Astana, Dhaka" },
    { value: "6.5", name: "(GMT+06:30) Yangon (Rangoon)" },
    { value: "7", name: "(GMT+07:00) Bangkok, Hanoi, Jakarta" },
    { value: "7", name: "(GMT+07:00) Krasnoyarsk" },
    { value: "8", name: "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi" },
    { value: "8", name: "(GMT+08:00) Kuala Lumpur, Singapore" },
    { value: "8", name: "(GMT+08:00) Irkutsk, Ulaan Bataar" },
    { value: "8", name: "(GMT+08:00) Perth" },
    { value: "8", name: "(GMT+08:00) Taipei" },
    { value: "9", name: "(GMT+09:00) Osaka, Sapporo, Tokyo" },
    { value: "9", name: "(GMT+09:00) Seoul" },
    { value: "9", name: "(GMT+09:00) Yakutsk" },
    { value: "9.5", name: "(GMT+09:30) Adelaide" },
    { value: "9.5", name: "(GMT+09:30) Darwin" },
    { value: "10", name: "(GMT+10:00) Brisbane" },
    { value: "10", name: "(GMT+10:00) Canberra, Melbourne, Sydney" },
    { value: "10", name: "(GMT+10:00) Hobart" },
    { value: "10", name: "(GMT+10:00) Guam, Port Moresby" },
    { value: "10", name: "(GMT+10:00) Vladivostok" },
    { value: "11", name: "(GMT+11:00) Magadan, Solomon Is., New Caledonia" },
    { value: "12", name: "(GMT+12:00) Auckland, Wellington" },
    { value: "12", name: "(GMT+12:00) Fiji, Kamchatka, Marshall Is." },
    { value: "13", name: "(GMT+13:00) Nuku'alofa" }
];

// Add timezones to select
timezones.forEach(function(item) {
    var option = document.createElement('option');
    option.value = item.name;
    option.innerText = item.name;
    timezoneSelect.appendChild(option);
});

let notificationsLastSelected = localStorage.getItem('switchNotifications');
let publicProfileLastSelected = localStorage.getItem('switchPublic');
let timezoneLastSelected      = localStorage.getItem('selectTimezone');

// Get settings from localStorage
if (notificationsLastSelected == 'true') {
    notificationSwitch.checked = true;
}

if (publicProfileLastSelected == 'true') {
    profilePublicSwitch.checked = true;
}

if (timezoneLastSelected) {
    timezoneSelect.value = timezoneLastSelected;
}

// Set settings to localStorage
settingsForm.addEventListener('submit', function(e) {
    e.preventDefault();

    notificationsLastSelected = notificationSwitch.checked;
    localStorage.setItem('switchNotifications', notificationsLastSelected);

    publicProfileLastSelected = profilePublicSwitch.checked;
    localStorage.setItem('switchPublic', publicProfileLastSelected);

    timezoneLastSelected = timezoneSelect.options[timezoneSelect.selectedIndex].value;
    localStorage.setItem('selectTimezone', timezoneLastSelected);
});

settingsForm.addEventListener('reset', function(e) {
    e.preventDefault();
    
    notificationsLastSelected = localStorage.getItem('switchNotifications');
    if (notificationsLastSelected == 'true') {
        notificationSwitch.checked = true;
    }
    
    publicProfileLastSelected = localStorage.getItem('switchPublic');
    if (publicProfileLastSelected == 'true') {
        profilePublicSwitch.checked = true;
    }

    timezoneLastSelected      = localStorage.getItem('selectTimezone');
    if (timezoneLastSelected) {
        timezoneSelect.value = timezoneLastSelected;
    }
    
});