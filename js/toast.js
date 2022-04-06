function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.querySelector('#toast')
    
    
    if (main) {
        const toast = document.createElement('div')
        const icons = {
            success: 'fa-solid fa-bell',
            info: 'fa-solid fa-bell',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-exclamation'
        }

        const autoRemove = setTimeout(function() {
            main.removeChild(toast)
        }, duration + 1000)

        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemove)
            }
            
        }
    
        const icon = icons[type]
        const delay = (duration / 1000).toFixed(2)
        toast.classList.add('toast', `toast--${type}`)
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
        `
        
        main.appendChild(toast)
    }


}
function showSuccessToast() {
    toast({
        title: 'Thông báo',
        message: 'Tính năng hiện chưa được cập nhật, bạn vui lòng thông cảm!',
        type: 'info',
        duration: 5000
    })
};

function showErrorToast() {
    toast({
        title: 'Thất bại',
        message: 'Có lỗi, vui lòng nhập lại!',
        type: 'error',
        duration: 5000
    })
};

