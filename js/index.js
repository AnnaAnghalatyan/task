$(".sortable").sortable({
    handle: ".drop-btn",
    axis: 'y',
    containment: 'parent',
    animation: 200,
});

$(".sortable").disableSelection();

$("#group-container").sortable({
    handle: ".group__sort",
    axis: 'y',
    containment: 'parent',
    tolerance: "pointer"
    // animation: 200,
});

$("#group-container").disableSelection();

let params = {
    table: '',
    name: '',
    price: ''
}

$(".modal__cancel").click(function () {
    $(".modal").removeClass('modal_show')
});


$(".add-new-item").click(function () {
    $(".modal").addClass('modal_show');
    const table = $(this).attr('data-table');
    params.table = table;
});


$('.modal__input').on('input', function () {
    const prop = $(this).attr('name');
    const value = $(this).val()
    params[prop] = value;
    console.log(params)
});

$('.modal__submit').click(function (e) {
    e.preventDefault()
    let table = $(`.sortable:eq(${params.table})`);
    let table_row = `<tr>
    <td>
        <span class="drop-btn">
            <span class="drop-btn__line"></span>
            <span class="drop-btn__line"></span>
            <span class="drop-btn__line"></span>
            
    </span></td>
    <td>
        <div class="checkbox">
            <input class="checkbox__input" type="checkbox">
            <label class="checkbox__label"></label>
        </div>
    </td>
    <td>
        <span class="bordered group-item__image-block">
        </span>
    </td>
    <td>
        <span class="bordered group-item__item-name">${params.name}</span>
    </td>
    <td>
        <span class="bordered group-item__item-price">
            <strong>$</strong> ${params.price}
        </span>
    </td>
    <td>
        <div class="switch group__switch">

            <input disabled="" id="switch1" class="switch__input" type="checkbox">
            <label for="switch1" class="switch__label"></label>
        </div>
    </td>
    <td>
        <div class="switch group__switch">

            <input disabled="" id="switch2" class="switch__input" type="checkbox">
            <label for="switch2" class="switch__label"></label>
        </div>
    </td>
</tr>`

    table.append(table_row);
    $('.modal').removeClass('modal_show');
    $('.modal__input').val('')
})