# Hedging
**Type:** Behavior  
**Referenced in:** 5 papers  

## State of the Field

**Space of definitions.** Across the surveyed work, hedging is treated as observable non-commitment in outputs, but the concrete behavior varies by task. One framing describes it as predictions pulled toward the midpoint, such as 0.5, and avoidance of high-confidence estimates, especially when the correct outcome is certain; one study says a model can "underperform when the crowd is highly certain" because it tends to hedge its predictions. Other papers use the same label for cautious or non-committal language that minimizes imposition, or for annotator behavior that assigns "equal" preferences or intermediate ratings when responses seem similar or uncertain.

**Variants.** Papers study hedging in several settings rather than as a single task. The recorded variants are probability forecasting, politeness strategy production, and feedback acquisition through both ranking and rating tasks; in the politeness work it appears alongside indirectness and other distancing strategies, including when giving positive feedback, and in preference annotation it includes tie situations marked as "equal" feedback.

**Space of elicitation and scores.** No measurement instrument is linked to it. In the available descriptions, papers identify hedging directly in the output pattern itself, for example midpoint forecasts, cautious wording, or "equal" and intermediate feedback in ranking and rating tasks.

**What it is taken as evidence of.** In the linked relationships, hedging is not tied to several constructs. It is linked to a single construct, Calibration, and one paper claims a causal relationship from Calibration to Hedging, stating that a LACIE-trained model "hedges more when uncertain" and uses implicit cues to signal certainty when it is correct.

## Sources

**[Approaching Human-Level Forecasting with Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/5a5acfd0876c940d81619c1dc60e7748-Paper-Conference.pdf)**
> An observable tendency to produce predictions that are closer to the midpoint (e.g., 0.5) and avoid high-confidence estimates, especially when the correct outcome is certain.

## Relationships

### → Hedging
- **Calibration** (constructs) — *causes*
  > Qualitatively, we find that a LACIE-trained model hedges more when uncertain and adopts implicit cues to signal certainty when it is correct, such as using an authoritative tone or including details. (Abstract)
  - [LACIE: Listener-Aware Finetuning for Calibration in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4b8eaf3bcdc105423a972ed90eb07217-Paper-Conference.pdf)
