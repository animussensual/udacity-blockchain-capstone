const proof2 = {
    "scheme": "g16",
    "curve": "bn128",
    "proof": {
        "a": [
            "0x2a1ca672e9aeb16afea241b11c912414725a8ab8fee474c0e50ae271b55241a2",
            "0x12c7c7989640743a844070b93650aa3bf614b66e3317548064ec722daf2fa3de"
        ],
        "b": [
            [
                "0x1dc56b498aadf554d1808d453bcb5f7ad1a46d9a32079e793056f0ba348caae9",
                "0x23fe93d3401b1bb3798d7d20fb79ea8bfbf6cdc11e560e81e2b8909f6b969dcb"
            ],
            [
                "0x2bc8a8c22c14b2c0373d6d1b80358181cab2e940278f5b82f3242a4a6c3f22a5",
                "0x18204d864b29a25b428e14202a219370126c963f5b7fc6c4b01290fc8f981d75"
            ]
        ],
        "c": [
            "0x1799f5cbcf6aabecc3a673879b064ca2c81406617fe56f7be4c7f606d6538b50",
            "0x2aee577488e0c14e6f0c3e643411103e68067857940f43b21fa1d1822adb945b"
        ]
    },
    "inputs": [
        "0x0000000000000000000000000000000000000000000000000000000000000002",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
    ]
}

const proof3 =
    {
        "scheme": "g16",
        "curve": "bn128",
        "proof": {
            "a": [
                "0x01c69ff5bc0dda9a88d1b0ba998c4ffd663c80519bd2e28ac0910050f9108c3c",
                "0x26ae57055d350428df28e10382de85e6821bfa11bf2220d3cdf75ff5506429d4"
            ],
            "b": [
                [
                    "0x179af3adc25ed18e5dbf1630796417f57d0676204210fa920a4f70f19d78043f",
                    "0x022496d13834cf48708fb9856fec94f4d12495c5b99d8ce75ac348fd8e85a7b7"
                ],
                [
                    "0x1614b8847af84a9dc55061158b07692b04b04f3db065e8d9dec5961d1f08d34b",
                    "0x1b286dae30db79e4cf7122720476fa9dd7217b0565a6efbad42d8757fafb9c7f"
                ]
            ],
            "c": [
                "0x1fddd13f3d6091bfaa0fb2219861df63de74d115495a7f75a1e4c7c69ec51025",
                "0x09f3038657cc3b2b9d17377ec4ad345b4b88ded3b4f2712d1579e71bf601d15a"
            ]
        },
        "inputs": [
            "0x0000000000000000000000000000000000000000000000000000000000000003",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
        ]
    }

module.exports = {
    proof2,
    proof3
}