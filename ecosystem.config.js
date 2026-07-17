module.exports = {
    apps: [
        {
            name: 'WEB-jouskaio.me',
            cwd: '/home/user/Documents/jouskaio.me/WEB-Jouskaio.me',
            script: '/usr/bin/bash',
            args: ['-lc', 'npx next start -H 0.0.0.0 -p 3000'],
            interpreter: 'none',
            exec_mode: 'fork',
            instances: 1,
            autorestart: true,
            restart_delay: 5000,
            max_restarts: 20,
            max_memory_restart: '500M',
            watch: false,
            env: {
                NODE_ENV: 'production',
            },
            time: true,
        },
        {
            name: 'WEB-storybook',
            cwd: '/home/user/Documents/jouskaio.me/WEB-Jouskaio.me',
            script: '/usr/bin/bash',
            args: ['-lc', 'npx serve -s storybook-static -l tcp://0.0.0.0:6060'],
            interpreter: 'none',
            exec_mode: 'fork',
            instances: 1,
            autorestart: true,
            restart_delay: 5000,
            max_restarts: 20,
            max_memory_restart: '300M',
            watch: false,
            env: {
                NODE_ENV: 'production',
            },
            time: true,
        }
    ],
};
