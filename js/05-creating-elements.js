const parentBox = document.querySelector(".hero");
const titleEl = document.createElement("h1");
titleEl.classList.add("page_title");
titleEl.textContent = "Page title";

console.log(titleEl);

// document.body.appendChild(titleEl);
parentBox.appendChild(titleEl);

const imageEL = document.createElement("img");
imageEL.src =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw0NDQ8NDQ0NDw0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zRDMtNygtLysBCgoKDQ0OFQ8PFSsZFRkrKy0rKysrKy0tLTctKy0tKystLSs3NysrKystLSsrKysrKysrKysrKysrKysrKysrK//AABEIALQBGAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADcQAAICAQIDBAgFAwUBAAAAAAABAgMRBCEFEjETQXOyBiIjJFFxsbMUYXJ0gTIzkTRCUmOSQ//EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAbEQEBAQADAQEAAAAAAAAAAAAAARECIUExEv/aAAwDAQACEQMRAD8A8ZS2XyQh8PC+S+gsGpQwhCJaEJoQgC0XcperlCf5MzME4Z2wBucN0rjYnjb4nf8AD4rl6LOxxXAbXJcsu7GDvNDViK/gkDanaJgal9Te1z2MC8oo2sqWMs3FG5maB2ME5jTkBlIoM5jKQDmJwe5RZITYSK2AXMCPMWtMsvf6FKPU0dGiC3GtfBf4Q0or4IMkAtkDFewE2SsZAtXCEPyi5TOGGGE0MymJQLMJIp5JRmNEtXDvRl31mqpANRAow7l1EG1UdmIDoON8CdPIt/7VMsuPK3zVxl0/nqc7OGNj0xaXnopzv7GpZe7/AKFg4/jnDXCXMlsWRHPiCTiQFimHEIgfAamGQcVk0NDTloDovRrRb7953dNOIpfkc7wCrHLsdXJbEGNxAw9R3m5xLvMS/vERnXGbqWaWoMvWPqNFOUiDY0mRyRU8hKwCYapiC1GWwC5kkwVzNKinuamiexkw6mnpXsTRdcitbIk5ApEEB4oWCaRQsCwTSGaAFNAZBLJFayYE2yPMAlYR5yUW4zJyeUUo2B65ZEFXVQ2fyYjcq4S5V2TlhRjXN/zytiCO90en93ofVOmnyIz+JaFSTTXVGtwi/FNEJ9Oxpxn9CLGq0ixlbpm4zryHjOgdU3t6rMqSPTuO8KU4S2+T78nnOp07jJxaxhtGvqqw4/KIziiVGtw/qjJqNfhy3QHc8F6r+Dp30/g5ngy3R0ilsMGPxOPeYd6Om10VhnM6yW7JgzNUzG1czS1lhjXMYACGYgHJ1yBjoyD8xCxkciZpSh1NCqWxnILC0li4vSsIO0qTtAzuIY0e2HVxkfiB1qAmNlXoad6wZS1Au1Y0xbstK05kXMg2TQpSIcw7ImhOMi5pd2ilA1eEwzJCDoI1SdFiWcdnNv8A8MRuV0JaW7b/AONvkYipXTaPQxnpdN/y/D0vP59nEDTKVb7Ozp0TNbg8fdtL4FH20T1ejViw1v3M14wxtTpU1lbpnAelvCuVuaWD0J1zpfLLeL7ytxTQxtrlhJ5RFeJzjuQaNTjGhdVsoNY32+RnNBoqjc4RHLRiQN3grXNj5Eo7vhMMJGtJ7Gfwv+lfItWvAgr6yzZnMa6e7NzWXdTnNdLPQUZerfUzrGaFsepTnX1JqyKbEgkoEeUauEIQiaYRJRFGIblwi6uK8iLkSmwbRNVGcwMmEmiDRBEQ/KOolEoomkPFE0iSAeBBGiLRcEBYHEGaeBt8AjmaMSJ0votVmQR2soY0t3gXeRiLGoj7tf4F322I0ldTwaPu2l/b6f7aLnKVuD/6XS/t9P8AbiWzXjmBqNOpppow7aZ1PGG4HRkLa1JYZEea+mfAu1h29X9UVlpHmdkWnhrDWx73qtM6211g9v4OE9MPRdST1GnWe+cV3BuV53ku6LUOMk0VJxabT2a+Ioy3I09F4Nr8xW/cak9YmjiOB6rDS/g6Ccm1gCvxfVNppM5jUaieeux0OorMDXVYbFUKvWfHcsxkpLb/AAZL6lnSy3MVqDWwBNFySyslecSKDgjyhBsFVKCHt6EoENR0J2K8iApMjkVDSREmPylgGThEn2ZJIB0sDMjKZBzKJZGyQ5xKQokxCyJFiHh1Ox9E69zlKq90dz6MUYSZWXTaz/TX+Bd9tiB8Qfu96/6bfIxBK6vg0vdtL+30/wBtFpyKXCH7tpf29H24h5SNxxE7QXaFeUyDsGCzYoyTT3MbV6Z1t7Zi/wCTQjaTnKMk09wsryr029G0k9VQlh5coruZwn1R7vq9LjmhJc0Jdx5h6X8BdFjtrWapbv4IY3KxdBdyyTOv013NFP8AI4iEsM3uF6vbGTFjUbVkdjD4lXhtl+eqZX1DU1jv7mSNY5+UdydbLVmjmn0b+QNaaX/FmOTQ8JbIhNEoRa2Y7iJFV2iIeUQUkAykBumSm8AJsoblyEVDFSW1MXsVVQyXZ46lhzAWTMoZg5si5sYQQkyDYRoZRNQDwSiifIPylCwSihYHiugiVe0FfNJHoPCKuWKOT4FostNnZUeqkjUrOi8Rl7C/wrfIxAeIT9jf4VvkY4ZdbwmXu2l/b0fbQecinwp+7aXwKPIg02bjn6U5A3IjKQNzC4k5jxtASkCcxqYvTkpLcxeJ6SM4yrmsxkmi6rh54khrUeN8c4ZLT3Th/tz6r+KK2mv5Wek+kvB+2rk0vXjl572eY3QcW09mnuZajchZzLInlFDht/8AtZqSiZrpEY6iSJfic/ADNAzFaTm8sbkGiGSJoryiAmi5MrWIopWgJFm0rTIHrYXmAxJmkS5iMmMICIxJobBkIdIWCSRoNgcfAsElDFzh2n5pL4FeuGWdHwbT8qybZrZ4bSopYXQ0VIpUywEdoZT4hZ7G7wrPKxFLX2+yt8OzysYqO64VL3bTeBT5Ih5SKPCp+76bwKfIixKRufGPSkwUmPKQKci4ppSAzkKcgM5EEnIeNxVlMh2pRcsnszzr0v4byWdpBerPf5M7rtcrBQ4xpFbVKPellf4M1qPMq3h5NXS6zKxIz76HGUk+54GSMWOkrc69CHZlPSWvODapqzHJhtUhWTkiy6mBtWDOCtMq2BrZlaUi4K9qB8hZdY/ZEiKvILBYdZB1m9QHAuUOqySrM0AUCXIWFWS7Mgrcg2Cy4EJRNgDQ8YksEoIlFnR1Js6PSpJIwNK8M1q79jcZrS7QjK0oq4aVxeMZF1tvs7P0T+jEUtVb6ln6JfQQsR6PwyXu+m8CnyIO5FThsvYafwafIgzkb8ZxJyBTY0pA5yKIzkAskPOZWssJTCnIDKwjZYVrLSKsq0NCeVgy1cWKre8sVjekfBub2ta+aRzMq8dU0ekuaa+Zl6zhVM+uz/IlWONq2aZu6C3KSDvgVS6SkCloY17xk3+TMWNyriSZC/S5WwCNuC7TqV0ZjWnO6qpp4aBVVNs6a7Sws3B18OjHdGbRlU6H4olPTY7jYlTgBbEisWdIGVZqziVpwJaKSiTUQkmgbkXRLAxHnIysKh5MFITmQlI1oYXMQlIhzFiLVVhdquMuEizCRpK0FaM7SmrB3M1GBdRZ6k/0y+gxWun6sv0y+giI9M4frEqKF8KafIgktZ+Rn8PfsaPCq8qDtm/EF/FP4A56hkMkJFEZ2sBKYSaAyRIIykVrZB2gE4EtAchqpEORk4xJKq1CwKpp9SrFMmskq4PLBQ1kF3Fncr6l7GbuNRk2PBGu0bUlPn3OXbbWhqGkEr1uDOrtyRsyQaz1iKt2tMyVj7wbsKq5ZqMladwFyAzmAWVpHtADmM5mQV2DOYByEmaxBskZMgmJssQzY2SLZHJrcBYyDxmVEySmaiVc5hcxV5x+0LKyNbL1ZfJ/QRXss2l8n9BFSvTNA/Y0+FV5UHbK2h/s0+FX5EWEalZIi0TSE0NUGSB8pYwMoklMV+zGdJcUCXKKuM/sB1SXnEi8GNbkVlUPyBmwcmZvJcV7CrbuWrSrND99JjK1lZmzNvVrYx747mNaDjPBahNNFIeNmCC1ZWVpxwP+KErFIAckAmizIDOIVXZCTCTiCZYmokkyLIuRvBPmwNzgpSGEiCuQ2QZJMuCSYhIRrGafmFzDMiyyMnnLZ/JiIS6P5MQHqmh/s0+FV5UWEIQQ6B6rdCEFKmOEFiIRFgghCDSMgUhhGK0gwUhCMgVhWsEIgqajoZOqW4hAVJALJCEAHmCVSYhFBediTEIgHMBYIRYgTBsQjYQw4gEOhCDNTQhCNFIYQixk0uj+TEIQR//Z";
imageEL.alt = "meme cat";
imageEL.width = 600;
parentBox.appendChild(imageEL);
console.log(imageEL);

//item element

const navItemEl = document.createElement("li");
navItemEl.classList.add("site-nav__item");

const navLinkEl = document.createElement("a");
navLinkEl.classList.add("site-nav__link");
navLinkEl.textContent = "Особистий кабінет";
navLinkEl.href = "/profile";

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector(".site-nav");
// navEl.insertBefore(navItemEl, navEl.firstElementChild);
// navEl.insertBefore(navItemEl, navEl.lastElementChild);
navEl.insertBefore(navItemEl, navEl.children[1]);
