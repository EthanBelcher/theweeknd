(window.webpackJsonp = window.webpackJsonp || []).push([[6], {
    RNiq: function(n, e, t) {
        "use strict";
        t.r(e);
        var r = t("o0o1")
          , a = t.n(r)
          , o = t("q1tI")
          , s = t.n(o)
          , c = (t("8Kt/"),
        t("YFqc"))
          , u = t.n(c)
          , i = t("vcXL")
          , l = t.n(i)
          , d = s.a.createElement
          , m = function(n) {
            var e = n.fetchedData
              , t = e.errors
              , r = e.data;
            if (!r || t || r.error)
                return d("div", null, "Error");
            if (r.notFound)
                return d("div", null, "Not Found");
            var a = (r.artists[0] || {}).albums;
            return d("div", {
                className: "container"
            }, d("h1", {
                className: "text-center mt-2"
            }, "Albums"), d("div", {
                className: "row row-cols-sm-2 row-cols-md-3 row-cols-lg-4"
            }, a && a.map((function(n) {
                var e = n.cover
                  , t = n.name
                  , r = n.albumID;
                n.songLength;
                return d(u.a, {
                    key: t,
                    href: "/xo/".concat(r)
                }, d("a", null, d("div", {
                    className: "card bg-dark m-3"
                }, d("img", {
                    src: e,
                    className: "card-img-top",
                    alt: t
                }), d("div", {
                    className: "card-header text-white text-center"
                }, t))))
            }
            ))))
        };
        m.getInitialProps = function(n) {
            var e;
            return a.a.async((function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        return "https://api.bjnunez.com",
                        n.next = 3,
                        a.a.awrap(l()("".concat("https://api.bjnunez.com", "/graphql"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                query: "\nquery ($handle: String!) {\n  artists(handle: $handle) {\n    albums {\n      cover\n      name\n      albumID\n      songLength\n    }\n  }\n}\n",
                                variables: {
                                    handle: "theweeknd"
                                }
                            })
                        }).then((function(n) {
                            return 404 === n.status ? {
                                notFound: !0
                            } : n.json()
                        }
                        )).catch((function(n) {
                            return {
                                error: !0
                            }
                        }
                        )));
                    case 3:
                        return e = n.sent,
                        n.abrupt("return", {
                            fetchedData: e
                        });
                    case 5:
                    case "end":
                        return n.stop()
                    }
            }
            ), null, null, null, Promise)
        }
        ,
        e.default = m
    },
    vlRD: function(n, e, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return t("RNiq")
        }
        ])
    }
}, [["vlRD", 0, 2, 1, 3]]]);
