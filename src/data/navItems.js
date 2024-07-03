const navList = [
    {
        _id: 1, 
        listName: 'Dashboard',
        icon1: 'bi bi-grid'
    },
    {
        _id: 2, 
        listName: 'Documents',
        icon1: 'bi bi-menu-button-wide',
        icon2: 'bi bi-chevron-down ms-auto',
        submenu: [
            {
                _id: 1,
                listName: 'Customers',
                icon: 'bi bi-circle'
            },
            {
                _id: 2,
                listName: 'Suppliers',
                icon: 'bi bi-circle'
            },
            {
                _id: 3,
                listName: 'Logistics',
                icon: 'bi bi-circle'
            }
        ]
    },
    {
        _id: 5, 
        listName: 'Forms',
        icon1: 'bi bi-journal-text',
        icon2: 'bi bi-chevron-down ms-auto',
        submenu: [
            {
                _id: 1,
                listName: 'Application Form',
                icon: 'bi bi-circle'
            },
            {
                _id: 2,
                listName: 'Release Form',
                icon: 'bi bi-circle'
            },
            {
                _id: 3,
                listName: 'Cancellation Form ',
                icon: 'bi bi-circle'
            }
        ]
    },
    {
        _id: 6, 
        listName: 'Tables',
        icon1: 'bi bi-layout-text-window-reverse',
        icon2: 'bi bi-chevron-down ms-auto',
        submenu: [
            {
                _id: 1,
                listName: 'General Tables',
                icon: 'bi bi-circle'
            },
            {
                _id: 2,
                listName: 'Data Tables',
                icon: 'bi bi-circle'
            },
            {
                _id: 3,
                listName: 'Customers',
                icon: 'bi bi-circle'
            }
        ]
    },
    {
        _id: 7, 
        listName: 'Charts',
        icon1: 'bi bi-bar-chart',
        icon2: 'bi bi-chevron-down ms-auto',
        submenu: [
            {
                _id: 1,
                listName: 'Chart.js',
                icon: 'bi bi-circle'
            },
            {
                _id: 2,
                listName: 'ApexCharts',
                icon: 'bi bi-circle'
            },
            {
                _id: 3,
                listName: 'ECharts',
                icon: 'bi bi-circle'
            }
        ]
    },
    {
        _id: 8, 
        listName: 'Profile',
        icon1: 'bi bi-person'
    },
    {
        _id: 9, 
        listName: 'Contact',
        icon1: 'bi bi-envelope'
    },
    {
        _id: 10, 
        listName: 'Register',
        icon1: 'bi bi-card-list'
    },
    {
        _id: 11, 
        listName: 'Login',
        icon1: 'bi bi-box-arrow-in-right'
    },
    {
        _id: 12, 
        listName: 'Setting',
        icon1: 'bi bi-gear'
    },
    {
        _id: 13, 
        listName: 'F.A.Q.',
        icon1: 'bi bi-question-circle'
    },    {
        _id: 14, 
        listName: 'Blank',
        icon1: 'bi bi-file-earmark'
    }
];

export default navList