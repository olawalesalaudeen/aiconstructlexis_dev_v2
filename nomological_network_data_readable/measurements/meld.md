# MELD
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across the papers, MELD is most commonly described as a multimodal dataset of TV show dialogues annotated for emotion and sentiment, used for evaluating emotion recognition in conversational speech. Some descriptions are more specific, calling it a multimodal multi-party Speech Emotion Recognition dataset from the TV series Friends with over 1,400 dialogues and 13,000 utterances, annotated with seven emotion labels and sentiment, while another paper reports assessing emotion recognition on 2,608 utterances.

**What it is claimed to measure.** Papers use MELD to measure two behavioral indicators, Emotion analysis and Speech emotion recognition, and two constructs, Emotion understanding and Utility preservation. The prevailing usage is emotion-focused: papers describe it as an emotion recognition or emotion classification benchmark, and one paper interprets MELD results as showing "strong emotion perception and contextual understanding"; the links therefore center on emotion-related outcomes, though a smaller line of work also uses it in general utility evaluation.

**Space of uses.** In the papers here, MELD is positioned as an evaluation benchmark and is used alongside other benchmarks rather than on its own. One study assesses emotion recognition on IEMOCAP and MELD, while another includes MELD alongside AIR-Bench Chat and LibriSpeech for general utility evaluation and separately describes it as an emotion classification benchmark with multimodal conversational utterances labeled across seven emotion categories.

## Sources

**[Distilling an End-to-End Voice Assistant Without Instruction Training Data](https://aclanthology.org/2025.acl-long.388.pdf)**
> Multimodal dataset of TV show dialogues annotated for emotion and sentiment, used for evaluating emotion recognition in conversational speech.

## Relationships

### → MELD
- **Emotion analysis** (behaviors tasks) — *measured_by*
  > Emotion recognition is assessed on IEMOCAP (Busso et al., 2008) and MELD (Poria et al., 2019), with 1,241 and 2,608 utterances.
  - [Distilling an End-to-End Voice Assistant Without Instruction Training Data](https://aclanthology.org/2025.acl-long.388.pdf)
- **Utility preservation** (constructs) — *measured_by*
  > For general utility evaluation, we use AIR-Bench Chat..., LibriSpeech..., and MELD (Poria et al., 2019), an emotion classification benchmark... (Section 8.1)
  - [SPIRIT: Patching Speech Language Models against Jailbreak Attacks](https://aclanthology.org/2025.emnlp-main.734.pdf)
- **Speech emotion recognition** (behaviors tasks) — *measured_by*
  > MELD (Poria et al., 2019), an emotion classification benchmark with multimodal conversational utterances labeled across seven emotion categories. (Section 8.1)
  - [SPIRIT: Patching Speech Language Models against Jailbreak Attacks](https://aclanthology.org/2025.emnlp-main.734.pdf)
- **Emotion understanding** (constructs) — *measured_by*
  > This shows its strong emotion perception and contextual understanding. (Section 4.2, referring to MELD results in Table 6)
  - [Audio-Reasoner: Improving Reasoning Capability in Large Audio Language Models](https://aclanthology.org/2025.emnlp-main.1216.pdf)
