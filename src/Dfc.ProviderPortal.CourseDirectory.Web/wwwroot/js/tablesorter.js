 let compare = {
        name: (a, b) => {
            a = a.replace(/^the /i, '');
            b = b.replace(/^the /i, '');

            if (a < b) {
                return -1;
            } else {
                return a > b ? 1 : 0;
            }
        },
        number: (a,b) => {
            return a - b;
        },
        duration: (a, b) => {
            a = a.split(':');
            b = b.split(':');

            a = Number(a[0]) * 60 + Number(a[1]);
            b = Number(b[0]) * 60 + Number(b[1]);

            return a - b;
        },
        date: (a, b) => {
            a = new Date(a);
            b = new Date(b);

            return a - b;
        }
    };

    $('.sortable').each(function () {

        let $table = $(this);
        let $tbody = $table.find('tbody');
        let $controls = $table.find('th');
        let rows = $tbody.find('tr').toArray();

        $controls.on('click', function () {
            let $header = $(this);
            let order = $header.data('sort');
            let column;


            if ($header.is('.ascending') || $header.is('.descending')) {
                $header.toggleClass('ascending descending');
                $tbody.append(rows.reverse());
            } else {
                $header.addClass('ascending');
                $header.siblings().removeClass('ascending descending');
                if (compare.hasOwnProperty(order)) {
                    column = $controls.index(this);

                    rows.sort(function (a, b) {
                        a = $(a).find('td').eq(column).text();
                        b = $(b).find('td').eq(column).text();
                        return compare[order](a, b);
                    });

                    $tbody.append(rows);
                }
            }
        });
    });
