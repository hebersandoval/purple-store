// Initialize the lpTag namespace and the identity array, if the identity function is placed above the tag.
// var lpTag = {};
lpTag.identities = [];

lpTag.identities.push(identityFn);

function identityFn(callback) {
    console.log('Calling identity fn');
    callback({
        iss: 'https://purple-store.netlify.app',
        acr: 'loa1',
        sub: '1234567890',
    });
}

function auth(cb) {
    console.log('Calling auth function');
    const jwt =
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3B1cnBsZS1zdG9yZS5uZXRsaWZ5LmFwcCIsInN1YiI6IjEyMzQ1Njc4OTAiLCJleHAiOjk1MTYyMzY1MjIsImlhdCI6MTUxNjIzOTAyMn0.SBCDottyFglRyMWjYQC_OEYtE7qC2zCAC2qEdVzma6DWtR3REn3ssW3r1wA3VH1b0BbIh28UZzXZVPqP_uVmOX80_qOgb6ZHNWfg3OYt9XFTW-KBmHUTh4xoGiY1GfvtTKTXV0fn_tzZB7TZJy_fQ6PCF_hk3IJWz-JMyVW7_iUtbWOYmk4i_qeJDXE4l8wi5jBq4yIWO3KonFhC1KsVwII0ZmxNzIuCLGC2yYAk-HCdl5JBd7AMkFiuXw1wf1oyrYsCzyssgLRklzhZWpLWTXfsWVhRXS43m6-qZbD1T5lPMW59Hu-RGFCgXNV50CUh7SOT-ro5LoaOWl5hLOti_g';
    cb(jwt);
}
