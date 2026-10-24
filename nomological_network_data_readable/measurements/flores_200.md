# FLORES-200
**Type:** Measurement  
**Referenced in:** 35 papers  
**Also known as:** Flores-200, Flores200  

## State of the Field

**What it is.** Most definitions treat FLORES-200 as a multilingual machine translation benchmark spanning 200 languages, often emphasizing low-resource coverage. Papers variously use its development, test, and devtest splits; some explicitly describe it as parallel text, and one definition says it contains short paragraphs sampled from Wikimedia and translated by skilled human translators into 204 languages, whereas most others describe 200 languages. A smaller line of work also uses its development and test sets as high-quality parallel training data, and one paper notes that Belebele passages are sourced from FLORES-200.

**What it is claimed to measure.** Across the linked claims, papers use FLORES-200 to measure 1 behavioral indicator, Machine translation, and 1 construct, Generalization. The prevailing usage is machine translation evaluation, including low-resource, multilingual, English-to-X, X-to-English, and many-to-many settings; papers report chrF1, spBLEU, COMET, or BLEU on the benchmark. Only one construct link appears: one paper uses Flores200 for zero-shot evaluation as a measure of generalization in En-Zh and En-De translation.

**Space of uses.** No measurement instrument is linked to it. Papers usually position FLORES-200 as an evaluation benchmark, including 5-shot and 4-shot in-context translation evaluations, though some also use its development and test sets for training or use the test split to identify expert neurons and test cross-lingual retrieval. In the source descriptions it is sometimes used alongside WMT or WMT21 news translation, and one paper uses it together with MAFAND-MT and Lego-MT.

## Sources

**[LLM Augmented LLMs: Expanding Capabilities through Composition](https://proceedings.iclr.cc/paper_files/paper/2024/file/008a16ead32f932b711788c276890456-Paper-Conference.pdf)**
> A multilingual benchmark dataset for evaluating machine translation quality across 200 languages, including many low-resource ones, using the chrF1 metric.

**[A Paradigm Shift in Machine Translation: Boosting Translation Performance of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/0b9536e186a77feff516893a5f393f7a-Paper-Conference.pdf) (as "Flores-200")**
> Massive multilingual benchmark dataset used for evaluating low-resource and high-resource language translation, including development and test sets used here as high-quality parallel training data.

**[Steering into New Embedding Spaces: Analyzing Cross-Lingual Alignment Induced by Model Interventions in Multilingual Language Models](https://aclanthology.org/2025.acl-long.118.pdf) (as "Flores200")**
> A machine translation dataset containing parallel text for 204 languages, used for identifying expert neurons and evaluating cross-lingual retrieval.

## Relationships

### → FLORES-200
- **Machine translation** (behaviors tasks) — *measured_by*
  > Translating text from a non-English language to English: We carry out these evaluations in a 5-shot in-context learning paradigm on the FLORES-200 (Costa-juss`a et al., 2022) dataset. (Section 4.2)
  - [LLM Augmented LLMs: Expanding Capabilities through Composition](https://proceedings.iclr.cc/paper_files/paper/2024/file/008a16ead32f932b711788c276890456-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > “For zero-shot evaluation, we adopt Flores200 (NLLB Team, 2022) and evaluate on {Fr, De, Hindi (Hi), Turkish (Tr), Polish (Po)→Zh} and {Fr, Zh, Hi, Tr, Po→De} for En-Zh and En-De translation respectively.”
  - [When Scaling Meets LLM Finetuning: The Effect of Data, Model and Finetuning Method](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2ad28981782bb62f025d2893791b629-Paper-Conference.pdf)
