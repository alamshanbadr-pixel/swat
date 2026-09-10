const titles={dashboard:'لوحة القيادة',ranks:'الرتب والمناصب',complaints:'الشكاوى',permissions:'الصلاحيات'};const toast=document.getElementById('toast');
function showToast(msg){toast.textContent=msg;toast.style.display='block';setTimeout(()=>toast.style.display='none',2200)}
function openPage(page){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(page).classList.add('active');document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.page===page));document.getElementById('pageTitle').textContent=titles[page]}
document.querySelectorAll('[data-page]').forEach(el=>el.addEventListener('click',()=>openPage(el.dataset.page)));
document.querySelectorAll('.promote').forEach(b=>b.addEventListener('click',()=>showToast('تم تسجيل طلب الترقية بنجاح')));
document.querySelectorAll('.demote').forEach(b=>b.addEventListener('click',()=>showToast('تم تسجيل إجراء التنزيل بنجاح')));
document.querySelectorAll('.permission-card input').forEach(input=>input.addEventListener('change',()=>showToast('تم تحديث الصلاحية')));
document.getElementById('newComplaint').addEventListener('click',()=>showToast('يمكن ربط هذا الزر لاحقًا بنموذج إضافة شكوى')));
document.querySelectorAll('.complaint-card .small-btn').forEach(b=>b.addEventListener('click',()=>showToast('تم فتح تفاصيل الشكوى')));
document.getElementById('rankSearch').addEventListener('input',function(){const q=this.value.trim().toLowerCase();document.querySelectorAll('#rankTable tr').forEach(row=>row.style.display=row.textContent.toLowerCase().includes(q)?'':'none')});
