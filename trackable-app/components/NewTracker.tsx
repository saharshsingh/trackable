import { Tracker, TrackingModeName } from "@/lib/types";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, RadioButton, Text, TextInput } from "react-native-paper"

const INITIAL_TRACKER: Partial<Tracker> = {
    color: '#6495ED',
    tracking_mode: { name: TrackingModeName.Sum },
};

const CreateTracker = () => {
    const [tracker, setTracker] = useState(INITIAL_TRACKER);

    const onFieldSet = (update: Partial<Tracker>) => setTracker({ ...tracker, ...update });

    return (
        <View style={styles.container}>
            <TextInput
                label="Counter Name"
                value={tracker.name ?? ''}
                onChangeText={(name: string) => onFieldSet({ name })}
                style={styles.input}
            />
            
            <Text style={styles.label}>Tracking Mode</Text>
            <RadioButton.Group
                onValueChange={(value) => onFieldSet({ tracking_mode: { name: value as TrackingModeName } })}
                value={tracker.tracking_mode?.name ?? 'sum'}
            >
                <View style={styles.radioButtonContainer}>
                <RadioButton.Item label="Sum" value="sum" />
                <RadioButton.Item label="Latest" value="latest" />
                </View>
            </RadioButton.Group>
        
            <Button mode="contained" onPress={() => console.log(JSON.stringify(tracker))} style={styles.button}>
                Save Counter
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    input: {
      marginBottom: 12,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    radioButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    button: {
      marginTop: 16,
    },
});

export default CreateTracker;
