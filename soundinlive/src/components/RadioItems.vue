<template>
    
        <li class="radio-item">
            <label>
                <div class="radio-check">
                    <img class="radio-img" src="../assets/radio/{radio.img}" alt="обложка">
                </div>
                <input class="radio-btn" type="radio" id="RTLGroove" name="radioStantion"
                        data-radio-stantion="http://{radio.station}">
                <span class="radio-name">{{radio.name}}</span>
            </label>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['radio'],
    
}
</script>