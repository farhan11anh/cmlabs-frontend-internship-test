
    class Menu {
        constructor(url, method){
            this.url = url;
            this.method = method;
        }
    
        getData() {
            return $.ajax({
                url:this.url,
                method:this.method,
            })

        }
    }
