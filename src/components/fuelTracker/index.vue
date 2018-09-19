<template>
    <div class="fuel-tracker">
        <div class="columns is-mobile">
            <!--fuel price-->
            <div class="column is-half is-full-mobile">
                <div class="columns is-mobile">
                    <div class="column is-one-quarter is-half-mobile">
                        <label class="input-label">Fuel price: (euro per liter)</label>
                    </div>
                    <div class="column is-half">
                        <input type="number" class="input-field" />
                    </div>
                </div>
            </div>
            <!--total price-->
            <div class="column is-half is-full-mobile">
                <div class="columns is-mobile">
                    <div class="column is-one-quarter is-half-mobile">
                        <label class="input-label">Total price: (euro) </label>
                    </div>
                    <div class="column is-half">
                        <input type="number" class="input-field" />
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <!--liters-->
            <div class="column is-half is-full-mobile">
                <div class="columns is-mobile">
                    <div class="column is-one-quarter">
                        <label class="input-label">liters of fuel: </label>
                    </div>
                    <div class="column is-half">
                        <input type="number" class="input-field" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fuelTracker"
    }
</script>