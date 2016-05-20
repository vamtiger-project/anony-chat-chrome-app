class StrangerButton {
    main(stranger) {
        var strangerButton = vamtiger.select.newElement(`
            <button>${stranger}</button>
            `);

        return strangerButton;
    }
}

var stranger = new StrangerButton();

export default stranger.main;
